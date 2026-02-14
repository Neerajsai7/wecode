const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const passport = require("passport");
const http = require("http");
const { Server } = require("socket.io");

dotenv.config();
require("./config/passport");

const app = express();
const server = http.createServer(app);

/* =============================
   SOCKET.IO SETUP
============================= */

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5500",
    methods: ["GET", "POST"]
  }
});

/* =============================
   MIDDLEWARE
============================= */

app.use(cors({
  origin: "http://localhost:5500",
  credentials: true
}));

app.use(express.json());
app.use(passport.initialize());

/* =============================
   DATABASE CONNECTION
============================= */

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Error:", err));

/* =============================
   RANDOM MATCHMAKING LOGIC
============================= */

let waitingUser = null;

io.on("connection", (socket) => {
  console.log("🔌 User connected:", socket.id);

  socket.on("join-queue", (peerId) => {

    if (waitingUser) {
      // Pair users
      io.to(waitingUser.socketId).emit("match-found", peerId);
      socket.emit("match-found", waitingUser.peerId);

      waitingUser = null;
    } else {
      waitingUser = {
        socketId: socket.id,
        peerId: peerId
      };
    }

  });

  /* =============================
     VOICE MESSAGE RELAY
  ============================= */

  socket.on("send-voice", (data) => {
    // Send voice to the other connected user
    socket.broadcast.emit("receive-voice", {
      voiceData: data.voiceData
    });
  });

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);

    if (waitingUser && waitingUser.socketId === socket.id) {
      waitingUser = null;
    }
  });
});

/* =============================
   ROUTES
============================= */

app.use("/api/auth", require("./routes/auth"));

app.get("/", (req, res) => {
  res.send("Server Running 🚀");
});

/* =============================
   START SERVER
============================= */

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
