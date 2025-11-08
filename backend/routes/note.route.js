import express from 'express';
import { createNote, deleteNote, getNotes, updateNote, togglePin } from "../controllers/note.controller.js";

const router = express.Router();

router.get('/', getNotes);
router.post('/', createNote); 
router.put('/:id', updateNote);
router.put('/:id/pin', togglePin);
router.delete('/:id', deleteNote);

export default router;