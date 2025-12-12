# Real-Time Chat – Interview Pitches

## 30-second Summary
I built a real-time chat app using React, Node/Express, Socket.IO, and MongoDB. It supports secure login with JWT, one-to-one messaging, image sharing via Cloudinary, online presence, unread counts, and a responsive UI with Tailwind. The frontend uses Context API for auth and chat state; the backend exposes REST endpoints and a Socket.IO server that delivers messages instantly and tracks who’s online. It’s a clean, production-like foundation that shows end-to-end real-time features and good engineering choices.

## 2-minute Elevator Pitch
This project is a full-stack real-time chat similar to WhatsApp DMs. On the frontend, I used React 19 with Vite and Tailwind to deliver a fast, responsive UI. State that needs to be app-wide—like the authenticated user, JWT token, socket connection, user list, messages, and selected conversation—is handled with the Context API. That keeps the code simple and avoids prop drilling or heavy state tools.

The backend is built with Node.js and Express. I structured it into routes, controllers, and models for clarity. MongoDB with Mongoose stores users and messages. Users have hashed passwords (bcrypt), and authentication is done with JWT, so protected endpoints are stateless and ready to scale. Images—both profile pictures and chat images—are uploaded to Cloudinary, and only the URLs are stored, which offloads media handling and speeds up delivery.

For real-time features, I used Socket.IO. When a user connects, the server maps their `userId` to a `socketId`. That lets me emit a new message directly to the intended receiver, and broadcast online status changes. The client subscribes to `newMessage` and `getOnlineUsers`, so the UI updates instantly without page reloads. I also track unread counts by counting unseen messages per user and marking them as seen when a conversation is opened.

I chose this stack because it’s pragmatic and production-friendly: React and Tailwind for fast UI development, Express and MongoDB for quick APIs and flexible data, JWT for stateless auth, Socket.IO for reliable real-time communication, and Cloudinary for media. The result is a clean codebase demonstrating modern patterns, real-time communication, and solid security basics—something I can extend easily with groups, notifications, or encryption.

---
Tips: Mention specific files for credibility, e.g. routing in `clinet/src/App.jsx`, auth/socket setup in `clinet/context/AuthContext.jsx`, message flow in `clinet/context/ChatContext.jsx`, socket server in `server/server.js`, and controllers in `server/controllers/*`. 
