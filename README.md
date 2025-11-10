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

1. Project Structure & Setup
This project was built using the file structure from my earlier MERN project. The backend is separated into routes, controllers, and config folders for clarity, while the frontend follows Vue.js component structure. This clean separation of file structure made it easier to debug and expand features later on.

2. Design Language & User Experience
The visual design draws inspiration from Apple’s Books app, focusing on a calm, minimalist color palette and high-readability serif typography. The goal was to create an environment that encourages focus and productivity. This guided both the color and font choices to prioritize user comfort and clarity.

3. AI-Assisted Development
AI tools such as Amazon Q were used to streamline the development process, particularly in code planning and generation. Example uses include:
	•	Data validation & flow checking: Confirmed parameter flow between frontend and backend before implementation to prevent integration issues.
	•	Boilerplate generation: Used prompts such as “Generate CRUD integration for notes.js with basic error handling” to speed up setup.
	•	Feature walkthroughs: Requested step-by-step guidance like “Explain the logic for implementing a pin system” to verify design intent before coding.

4. UI Effects & Experimentation
Experiments with glassmorphism to achieve an iOS-like “visual glass” aesthetic for buttons and overlays. The @wxperia/liquid-glass-vue library was attempted but caused layout inconsistencies in Vue’s flex containers. As fallback, custom vanilla CSS was implemented with:
	•	Backdrop blur and subtle depth shadows
	•	Gradient shimmer animations
	•	Smooth transitions and hover lift effects

## 🚀 Future Improvements
- User Authentication: Enable multiple users to have personal note spaces using an API like Clerk for secure login and session management.
- Personalization Options: Allow users to customize fonts, text size, and color themes.
- Advanced Note Organization: Add support for categories, bullet lists, and checklists to suit different note-taking needs.
- Enhanced Media Support: Integrate drawing tools and image attachments to make notes more expressive and interactive.


## 📝 License

This project is licensed under the ISC License.
