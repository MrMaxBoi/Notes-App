import express from "express";
import dotenv from "dotenv";
import path from "path";

import { connectDB } from "./config/db.js";

import noteRoutes from "./routes/note.route.js"; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

const __dirname = path.resolve();

app.use(express.json()); 

app.use('/api/notes', noteRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get(/^(?!\/api).*/, (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

app.listen(PORT, () => {
    if (process.env.NODE_ENV !== "test") {
        connectDB();
    }
    console.log(`Server is running at http://localhost:${PORT}`);
});
