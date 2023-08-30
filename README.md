# Syook Assignment: Encrypted Messaging System

This Node.js project is a part of an assignment for Syook. It implements an encrypted messaging system with the following components:

- **Emitter**: This component is responsible for creating encrypted messages and sending them to the listener using WebSockets.

- **Listener**: The listener receives encrypted messages, decrypts them, saves them into a database, and then broadcasts the decrypted message to the frontend.

- **Frontend**: The frontend component displays the decrypted messages to users in real-time.

## Features

- Secure end-to-end encrypted messaging.
- Real-time message delivery using WebSockets.
- Message storage in a database for future reference.
- User-friendly interface to view messages.

## Technologies Used

- Node.js
- WebSocket for real-time communication
- Encryption librarie crypto for message security
- Database MongoDB
- Express.js for the server
- React.js

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/syook-assignment.git
   cd syook-assignment
2. Move to emitter-service
   ```bash
   npm install
   npm run dev
3. Move to listener-service
   ```bash
   npm install
   npm run dev
4. Open browser and open url
   ```bash
   http://localhost:3000


## ScreenShots
![front-end](https://github.com/akashpadampalle/syook/assets/45806342/819225d8-f277-4bc9-a2dc-40b59b340175)

![database](https://github.com/akashpadampalle/syook/assets/45806342/36f218e9-d42d-4530-afb0-d4419e2adbd5)

