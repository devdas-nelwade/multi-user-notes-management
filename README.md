multiusernotesmgmt/
├── backend/
│   ├── controllers/
│   │   ├── noteController.js
│   │   └── userController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── Note.js
│   │   └── User.js
│   ├── routes/
│   │   ├── noteRoutes.js
│   │   └── userRoutes.js
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── api/
│   │   │   └── api.js
│   │   ├── components/
│   │   │   └── Navbar.js
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   ├── pages/
│   │   │   ├── Dashboard.js
│   │   │   ├── NoteForm.js
│   │   │   ├── Login.js
│   │   │   ├── Login.css
│   │   │   ├── Register.js
│   │   │   └── Register.css
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md

Git commonds:
git init
git add .
git commit -m
git push 

# Multi-User Notes Management App (MERN Stack)

## Overview
This is a full-stack multi-user notes management system where users can register, log in, and manage their personal notes securely. The app uses the MERN (MongoDB, Express, React, Node.js) stack and supports authentication, note creation, update, deletion, and listing.

## Tech Stack

### Frontend:
- React
- React Router DOM
- Context API (for auth state)
- CSS

### Backend:
- Node.js
- Express
- MongoDB with Mongoose
- JWT for Authentication
- bcryptjs for password hashing

---

## Setup Instructions

### Backend Setup

1. Navigate to backend:
```bash
cd backend

Frontend Setup:
cd frontend
npm install
npm start

