# Real-Time Full Stack Chat Application

A modern, real-time chat application built with React, Node.js, Socket.IO, and MongoDB. Features include user authentication, real-time messaging, image sharing, online status tracking, and a responsive design.

## ✨ Features

- **Real-time Messaging**: Instant message delivery using Socket.IO
- **User Authentication**: Secure login/register with JWT tokens
- **Image Sharing**: Upload and share images in conversations
- **Online Status**: Real-time online/offline user indicators
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Message History**: Persistent chat history stored in MongoDB
- **User Profiles**: Customizable user profiles with profile pictures
- **Unread Message Counts**: Track unread messages from each user
- **Modern UI**: Beautiful interface built with Tailwind CSS

## 🚀 Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Socket.IO Client** - Real-time communication
- **Axios** - HTTP client for API calls
- **React Router DOM** - Client-side routing
- **React Hot Toast** - Beautiful notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Socket.IO** - Real-time bidirectional communication
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **bcryptjs** - Password hashing
- **Cloudinary** - Image upload and storage
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Real-Time Full Stack Chat/
├── clinet/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── context/        # React context providers
│   │   ├── pages/          # Page components
│   │   ├── assets/         # Images and static files
│   │   └── lib/            # Utility functions
│   ├── package.json
│   └── vite.config.js
├── server/                 # Backend Node.js application
│   ├── controllers/        # Route controllers
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── lib/               # Database and utility functions
│   ├── package.json
│   └── server.js
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB database
- Cloudinary account (for image uploads)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Real-Time-Full-Stack-Chat
```

### 2. Backend Setup
```bash
cd server
npm install
```

Create a `.env` file in the server directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### 3. Frontend Setup
```bash
cd ../clinet
npm install
```

### 4. Start the Application

#### Start Backend Server
```bash
cd server
npm run server  # Development with nodemon
# OR
npm start       # Production
```

#### Start Frontend Development Server
```bash
cd clinet
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Server port number | Yes |
| `MONGODB_URI` | MongoDB connection string | Yes |
| `JWT_SECRET` | Secret key for JWT tokens | Yes |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | Yes |
| `CLOUDINARY_API_KEY` | Cloudinary API key | Yes |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | Yes |

### Database Setup
1. Create a MongoDB database
2. Update the `MONGODB_URI` in your `.env` file
3. The application will automatically create necessary collections

### Cloudinary Setup
1. Sign up for a Cloudinary account
2. Get your cloud name, API key, and API secret
3. Update the Cloudinary variables in your `.env` file

## 📱 Usage

### Authentication
1. Register a new account or login with existing credentials
2. JWT tokens are automatically handled for authenticated requests

### Chat Features
1. **Start a Conversation**: Click on any user from the sidebar
2. **Send Messages**: Type text and press Enter or click send
3. **Share Images**: Click the gallery icon to upload and share images
4. **Real-time Updates**: Messages appear instantly for both users
5. **Online Status**: Green dots indicate online users

### User Management
- Update profile information
- Change profile pictures
- View online/offline status

## 🔒 Security Features

- **Password Hashing**: Bcrypt for secure password storage
- **JWT Authentication**: Secure token-based authentication
- **Protected Routes**: Middleware protection for sensitive endpoints
- **Input Validation**: Server-side validation for all inputs
- **CORS Configuration**: Proper cross-origin resource sharing

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Ensure MongoDB is accessible from your server
3. Deploy to platforms like Heroku, Railway, or DigitalOcean

### Frontend Deployment
1. Build the production version: `npm run build`
2. Deploy the `dist` folder to platforms like Vercel, Netlify, or GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Sumit Prasad**

## 🆘 Support

If you encounter any issues or have questions:
1. Check the console for error messages
2. Verify all environment variables are set correctly
3. Ensure MongoDB is running and accessible
4. Check that all dependencies are installed

## 🔄 Updates

Stay updated with the latest features and improvements by:
- Watching the repository
- Checking for new releases
- Following the development progress

---

**Happy Chatting! 🎉**
