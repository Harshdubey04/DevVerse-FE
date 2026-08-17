## DevVerse
-Create vite React App
-Install  tailwind css and daisy ui
-Add navbar component to app.jsx
-Create a Navbar.jsx to  a seperate component file
-Install react router dom and handle all the routing
-Create a login page
-Install axios
-CORS-Install cors in backend=>add middleware to app.js with configurations:origin, credentials:true
-In Frontend whenever you are making api call pass axios=>{withcredentials:true}  otherwise cookies will not be sent.
-the login and signup page is created
-basic routing is done and the basic folder structure is created
-navbar is created
-after the user is logged in the redux store is created to store the authenticated user's data
-Persistent login-After reload 1st make /profile/view api call to find user and put it in the store
-Protected route-if user is authenticated show the children components if it is not authenticated navigate to /login
-GuestRoute-if user is  authenticated navigate to /feed and if not authenticated show the login page
-Logout user api implemented-when u click on logout button,logout api is called->clear the store->navigate to /login 
-Profile api made
-Edit profile api made.
-The cors issue with patch api is solved using vite.config.js file.
-My Connections page is build-setup the  conneciton store,used custom  hooks and connection card component made.

-TODO: View profile login-get the userid of the connection -navigate to /profile/:id -profile page gets the user id from url - fetch the profile data

-Connection Request page created
-Accept and remove connection request feature built
 


 # DevVerse 🚀

DevVerse is a **MERN-based social networking platform for developers**, inspired by connection-based platforms like Tinder. It allows developers to discover other developers, send connection requests, manage connections, and view developer profiles.

The project is built with a focus on **authentication, protected routes, REST APIs, Redux state management, and scalable frontend architecture**. A real-time chat system using **WebSockets** is planned as the next major feature.

## ✨ Features

* 🔐 User Signup & Login
* 🍪 JWT authentication using HTTP-only cookies
* 🔄 Persistent login after page refresh
* 🛡️ Protected routes for authenticated users
* 👤 Guest routes for unauthenticated users
* 🚪 Logout functionality
* 👨‍💻 View and edit developer profiles
* 🤝 Send connection requests
* ✅ Accept connection requests
* ❌ Reject/remove connection requests
* 👥 View connected developers
* 🔎 View another user's profile
* 📦 Redux-based global state management
* 📡 REST API communication using Axios
* 🔒 CORS configured for credential-based authentication
* 📱 Responsive UI using Tailwind CSS and DaisyUI

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Redux Toolkit
* React Router DOM
* Axios
* Tailwind CSS
* DaisyUI

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* CORS

### Planned

* WebSockets
* Real-time one-to-one chat
* Online/offline user status
* Real-time message notifications

## 📁 Project Architecture

```text
DevVerse/
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── store/
│   │   ├── api/
│   │   └── App.jsx
│   │
│   └── ...
│
├── Backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   └── app.js
│   │
│   └── ...
│
└── README.md
```

## 🔐 Authentication Flow

DevVerse uses **JWT authentication with HTTP-only cookies**.

When a user logs in:

1. User submits login credentials.
2. Backend validates the credentials.
3. A JWT is generated.
4. JWT is stored in an HTTP-only cookie.
5. Frontend sends requests with credentials enabled.
6. Backend authentication middleware verifies the JWT.
7. Authenticated user information is stored in Redux.

Axios requests that need authentication are configured with:

```js
axiosInstance({
  withCredentials: true
});
```

This allows the browser to send authentication cookies with cross-origin requests.

## 🔄 Persistent Login

When the application is refreshed, Redux state is initially lost.

To maintain authentication:

```text
Application loads
      ↓
Call /profile/view
      ↓
Backend verifies JWT cookie
      ↓
User data returned
      ↓
Store user in Redux
      ↓
Application considers user authenticated
```

This prevents the user from being logged out simply because the page was refreshed.

## 🛡️ Route Protection

DevVerse uses two types of route guards.

### ProtectedRoute

Only authenticated users can access protected pages.

```text
Authenticated
     ↓
Show requested page

Not authenticated
     ↓
Navigate to /login
```

### GuestRoute

Used for pages such as Login and Signup.

```text
Authenticated
     ↓
Navigate to /feed

Not authenticated
     ↓
Show Login/Signup
```

## 🤝 Connection System

Users can discover other developers and interact with them through connection requests.

The connection flow is:

```text
Developer A
    ↓
Send Connection Request
    ↓
Developer B
    ↓
Accept / Reject
    ↓
Connection Created
```

The application also maintains a separate connection state using Redux and reusable custom hooks/components.

## 👤 Profile System

Users can:

* View their own profile
* Edit profile information
* View another developer's profile
* Navigate to a profile using its user ID

Planned profile route:

```text
/profile/:id
```

The profile page extracts the ID from the URL and fetches the corresponding user's profile data from the backend.

## 📡 API Communication

Axios is used on the frontend for communication with the Express backend.

CORS is configured on the backend to allow credential-based requests:

```js
cors({
  origin: "http://localhost:5173",
  credentials: true
});
```

The frontend sends credentials with authenticated requests so that HTTP-only cookies are included.

## 💬 Future: Real-Time Chat

The next major feature planned for DevVerse is **real-time developer-to-developer chat using WebSockets**.

The planned architecture is:

```text
User A
  │
  │ WebSocket
  ▼
WebSocket Server
  │
  │ WebSocket
  ▼
User B
```

The chat system will eventually support:

* 💬 One-to-one messaging
* ⚡ Real-time message delivery
* 🟢 Online/offline status
* 🔔 Real-time notifications
* 🕒 Message timestamps
* 📩 Message history
* 👥 Chat between connected developers

The goal is to make DevVerse more than a developer connection platform by adding **real-time communication between connected users**.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd DevVerse
```

### 2. Install frontend dependencies

```bash
cd Frontend
npm install
```

### 3. Install backend dependencies

```bash
cd Backend
npm install
```

### 4. Configure environment variables

Create a `.env` file in the backend project and add your required configuration, for example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 5. Start the backend

```bash
npm run dev
```

### 6. Start the frontend

```bash
npm run dev
```

The frontend will run on the Vite development server.

## 🗺️ Roadmap

* [x] React + Vite setup
* [x] Tailwind CSS + DaisyUI
* [x] Navbar
* [x] React Router setup
* [x] Login & Signup
* [x] Axios integration
* [x] CORS configuration
* [x] JWT authentication
* [x] Redux authentication state
* [x] Persistent login
* [x] Protected routes
* [x] Guest routes
* [x] Logout
* [x] Profile API
* [x] Edit profile
* [x] Connections
* [x] Connection requests
* [x] Accept/reject requests
* [ ] View other user's profile
* [ ] WebSocket integration
* [ ] Real-time chat
* [ ] Online/offline status
* [ ] Real-time notifications

## 🎯 Project Goal

DevVerse aims to provide a dedicated social platform where developers can **discover, connect, and communicate with other developers**.

The project is also designed as a practical full-stack application to explore concepts such as **authentication, authorization, REST APIs, Redux state management, database relationships, protected routing, and real-time communication using WebSockets**.

## 👨‍💻 Author

**Harsh Dubey**

Built with ❤️ using the MERN stack.






