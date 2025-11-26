package com.notes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;



@RestController
@RequestMapping("/api/notes")
@CrossOrigin(origins = "http://localhost:5173")
public class NoteController {
    
    @Autowired
    private NoteRepository noteRepository;

    @GetMapping
    public List<Note> getAllNotes() {
        List<Note> notes = noteRepository.findAll();
        // Sort: pinned notes first, then by creation date (newest first)
        notes.sort((a, b) -> {
            if (a.getPinned() && !b.getPinned()) return -1;  
            if (!a.getPinned() && b.getPinned()) return 1;  
            return b.getCreatedAt().compareTo(a.getCreatedAt());
        });
        return notes;
    }


    @PostMapping
    public Note createNote(@RequestBody Note note) {
        return noteRepository.save(note);
    }

    @PutMapping("/{id}")
    public Note updateNote(@PathVariable Long id, @RequestBody Note noteDetails) {
        Note note = noteRepository.findById(id).orElseThrow();
        note.setTitle(noteDetails.getTitle());
        note.setContent(noteDetails.getContent());
        note.setPinned(noteDetails.getPinned());
        return noteRepository.save(note);
    }

    @PutMapping("/{id}/pin")
    public Note togglePin(@PathVariable Long id) {
        Note note = noteRepository.findById(id).orElseThrow();
        note.setPinned(!note.getPinned());  // Toggle the pin status
        return noteRepository.save(note);
    }

    @DeleteMapping("/{id}")
    public void deleteNote(@PathVariable Long id) {
        noteRepository.deleteById(id);
    }


}
