import Note from "../models/note.model.js";

export const getNotes = async (req, res) => {
    try {
        const notes = await Note.findAll({
            order: [
                ['isPinned', 'DESC'],
                ['pinnedAt', 'DESC'],
                ['createdAt', 'DESC']
            ]
        });
        res.status(200).json({ success: true, data: notes });
    } catch (error) {
        console.log("error in fetching notes:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const createNote = async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ success: false, message: "Please provide title and content" });
    }

    try {
        const newNote = await Note.create({ title, content });
        res.status(201).json({ success: true, data: newNote });
    } catch (error) {
        console.error("Error in Create note:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    try {
        const note = await Note.findByPk(id);
        if (!note) {
            return res.status(404).json({ success: false, message: "Note not found" });
        }

        const updatedNote = await note.update({ title, content });
        res.status(200).json({ success: true, data: updatedNote });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const deleteNote = async (req, res) => {
    const { id } = req.params;

    try {
        const note = await Note.findByPk(id);
        if (!note) {
            return res.status(404).json({ success: false, message: "Note not found" });
        }

        await note.destroy();
        res.status(200).json({ success: true, message: "Note deleted" });
    } catch (error) {
        console.log("error in deleting note:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const togglePin = async (req, res) => {
    const { id } = req.params;

    try {
        const note = await Note.findByPk(id);
        if (!note) {
            return res.status(404).json({ success: false, message: "Note not found" });
        }

        note.isPinned = !note.isPinned;
        note.pinnedAt = note.isPinned ? new Date() : null;
        await note.save();

        res.status(200).json({ success: true, data: note });
    } catch (error) {
        console.log("error in toggling pin:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};