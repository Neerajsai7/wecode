1. Project Overview
The Problem: Many people feel isolated in digital spaces and struggle to start conversations with strangers.

The Solution: Say Hi! is a web-based random conversation starter that uses AI-generated prompts to remove social anxiety and facilitate meaningful 5-minute interactions.

Hackathon Details: Built for the "Code For Connection" hackathon at SRM University, Amaravati (February 14, 2026).

2. Key Features
Multi-Mode Interaction: Support for Voice, Video, and Text chat rooms.

Real-Time P2P Streaming: Uses WebRTC (via PeerJS) for low-latency audio and video calls.

AI Topic Cards: Automatically provides conversation prompts (e.g., "If today had a color, what would it be?") to keep the dialogue flowing.

Smart Matching: A "Random Pair" system that automates the connection between users.

Timed Sessions: A 5-minute countdown timer for every room to keep interactions high-energy and low-commitment.

3. Technical Stack
Frontend: HTML5, CSS3 (with Glassmorphism aesthetic), and JavaScript.

Communication: PeerJS library for managing peer-to-peer connections.

Backend & Database: Node.js with MySQL for user data and session management.

4. Team Roles (Epoch-Zero)
Frontend Lead: [Your Name] — Designed the UI/UX, implemented PeerJS logic, and handled real-time state management.

Backend Lead: [Teammate Name] — Developed the server-side logic and database architecture.

UI/UX Design: [Teammate Names] — Created the visual assets, logo, and background themes.

5. How to Run the Project Locally
Clone the repository: git clone https://github.com/Dasarath-Mali/EPOACH-ZERO.git (Note: Ensure the repo name matches your final project).

Open index.html in your browser.

To test the "Random Pair" feature, open the file on two separate devices (Set one to ROLE = 'A' and the other to ROLE = 'B').
