# 📝 Notes App

A full-stack notes management application built with Vue.js, Express.js, and SQLite.

## ✨ Features

- 📝 **Create notes** with title and content
- 📋 **View all notes** in a responsive card layout
- ✏️ **Edit notes** with inline dialog
- 🗑️ **Delete notes** with confirmation prompt
- 🌙 **Dark/Light mode** toggle
- 📌 **Pin notes** Prioritise your notes


## 🛠️ Tech Stack

- Vue.js 3 with Vuetify
- Node.js
- Express.js
- SQLite Database

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MrMaxBoi/Notes-App
   cd notes-app
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

4. **Environment Setup**
   
   Create a `.env` file in the root directory:
   ```env
   PORT=5050
   NODE_ENV=development
   ```

## 🏃‍♂️ Running the Application

### Development Mode

**Start Backend:**
```bash
npm run dev
```

**Start Frontend (in another terminal):**
```bash
cd frontend
npm run dev
```

**Access the application:**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5050

### Production Mode

```bash
npm run build
npm start
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

## 📁 Project Structure

```
notes-app/
├── backend/
│   ├── config/
│   │   └── db.js              # SQLite database configuration
│   ├── controllers/
│   │   └── note.controller.js # CRUD operations
│   ├── models/
│   │   └── note.model.js      # Note data model
│   ├── routes/
│   │   └── note.route.js      # API routes
│   └── server.js              # Express server
├── frontend/
│   ├── src/
│   │   ├── views/
│   │   │   ├── HomePage.vue   # Notes list with edit/delete
│   │   │   └── CreatePage.vue # Create note form
│   │   ├── stores/
│   │   │   └── notes.js       # Pinia store
│   │   ├── router/
│   │   │   └── index.js       # Vue Router config
│   │   ├── plugins/
│   │   │   └── vuetify.js     # Vuetify configuration
│   │   ├── App.vue            # Main app component
│   │   └── main.js            # Vue app entry point
│   └── package.json
├── database.sqlite            # SQLite database file
├── .env                       # Environment variables
└── package.json
```

## 🎯 Available Scripts

**Root directory:**
- `npm run dev` - Start backend in development mode
- `npm run build` - Build the application for production
- `npm start` - Start the application in production mode

**Frontend directory:**
- `npm run dev` - Start frontend development server
- `npm run build` - Build frontend for production
- `npm run preview` - Preview production build

## 🔧 Development Process

This project was built using AI assistance for:
- **Architecture planning** and technology selection
- **Code generation** for boilerplate components
- **Problem-solving** for database integration and Vue reactivity
- **UI design** with Vuetify components

Key decisions made:
- **Vue.js over React** for the assignment requirements
- **SQLite over MongoDB** for simpler setup and file-based storage
- **Vuetify over Tailwind** for rapid Material Design implementation
- **Pinia over Vuex** for modern Vue 3 state management

## 📝 License

This project is licensed under the ISC License.
