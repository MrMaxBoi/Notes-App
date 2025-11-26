import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref([])
  const loading = ref(false)

  const fetchNotes = async () => {
    loading.value = true
    try {
      const response = await fetch('/api/notes')
      const data = await response.json()
      notes.value = data
    } catch (error) {
      console.error('Error fetching notes:', error)
    } finally {
      loading.value = false
    }
  }

  const createNote = async (noteData) => {
    try {
      const response = await fetch('/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(noteData),
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      notes.value.unshift(data)
      return { success: true, message: 'Note created successfully' }
    } catch (error) {
      return { success: false, message: `Error creating note: ${error.message}` }
    }
  }

  const updateNote = async (id, noteData) => {
    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(noteData),
      })
      const data = await response.json()
      const index = notes.value.findIndex(note => note.id === id)
      if (index !== -1) {
        notes.value[index] = data
      }
      return { success: true, message: 'Note updated successfully' }
    } catch (error) {
      return { success: false, message: 'Error updating note' }
    }
  }

  const deleteNote = async (id) => {
    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: 'DELETE',
      })
      
      if (response.ok) {  
        notes.value = notes.value.filter(note => note.id !== id)
        return { success: true, message: 'Note deleted successfully' }
      }
      return { success: false, message: 'Error deleting note' }
    } catch (error) {
      return { success: false, message: 'Error deleting note' }
    }
  }

  const togglePin = async (id) => {
    try {
      const response = await fetch(`/api/notes/${id}/pin`, {
        method: 'PUT'
      })
      
      if (response.ok) {
        const updatedNote = await response.json()
        // Update the specific note in the array
        const index = notes.value.findIndex(note => note.id === id)
        if (index !== -1) {
          notes.value[index] = updatedNote
        }
        // Re-fetch to get proper sorting (pinned notes first)
        await fetchNotes()
        return { success: true, message: 'Note pin toggled successfully' }
      }
      return { success: false, message: 'Error toggling pin' }
    } catch (error) {
      console.error('Toggle pin error:', error)
      return { success: false, message: 'Error toggling pin' }
    }
  }


  return {
    notes,
    loading,
    fetchNotes,
    createNote,
    updateNote,
    deleteNote,
    togglePin
  }
})