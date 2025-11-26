package com.notes;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoteRepository extends JpaRepository<Note, Long> {
    // That's it! JpaRepository provides all CRUD methods automatically:
    // findAll(), save(), findById(), deleteById(), etc.
}