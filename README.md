# Artist Location Platform

## Overview
The Artist Location Platform is a full-stack web application designed to connect artists, fans, and administrators. It features real-time event tracking, precise artist location mapping, and event booking functionalities.

## Tech Stack
### Frontend
- **React 19**
- **Vite**
- **Redux & Redux Toolkit** - State management
- **React-Router-DOM** - Navigation & Routing
- **React-Leaflet** - Interactive maps
- **Axios** - API communications

### Backend
- **Node.js** & **Express** - Backend framework
- **MongoDB** & **Mongoose** - Database and modeling
- **JWT (JSON Web Tokens)** - Authentication
- **Bcryptjs** - Password hashing
- **Node-Cron** - Task scheduling
- **Joi** - Input validation

## Core Features
1. **Admin Panel**: Manage users, artists, and live events. Add new events with detailed pop-up modals including map previews.
2. **Artist Profiles & Tracking**: Real-time integration with map layouts to view current and upcoming artist performance locations.
3. **Fan Dashboard**: View upcoming performance events, check out event capacities, and reserve/book spots for events.
4. **Automated Tasks**: Background CRON jobs handle system maintenance tasks gracefully.

## Project Structure
```
Artist_location
├── backend/
│   ├── config/        # Environment and DB config
│   ├── app/           # Controllers, Models, Routes
│   ├── package.json
│   └── server.js      # Main Express entry point
└── frontend/Artist-Performance-LT/
    ├── src/           # React component files & redux slices
    ├── public/
    ├── package.json
    └── vite.config.js # Frontend build config
```

## Setup & Running the Application

### 1. Backend Setup
```bash
cd backend
npm install
```
- Create a `.env` file in the `backend` directory. Fill in required variables (e.g., MongoDB URI, JWT Secret).
- Start the server:
```bash
node server.js
```

### 2. Frontend Setup
```bash
cd frontend/Artist-Performance-LT
npm install
```
- Start the Vite development server:
```bash
npm run dev
```

## Contributing
Please follow branch naming conventions and submit Pull Requests with thorough descriptions for new features or bug fixes.
