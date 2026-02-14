const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },

  email: {
    type: String
  },

  password: {
    type: String   // ❌ NOT required anymore
  },

  googleId: {
    type: String   // For Google OAuth users
  }
});

module.exports = mongoose.model("User", UserSchema);
