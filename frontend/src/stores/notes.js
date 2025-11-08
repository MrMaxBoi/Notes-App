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
      if (data.success) {
        notes.value = data.data
      }
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
      const data = await response.json()
      if (data.success) {
        notes.value.unshift(data.data)
        return { success: true, message: 'Note created successfully' }
      }
      return { success: false, message: data.message }
    } catch (error) {
      return { success: false, message: 'Error creating note' }
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
      if (data.success) {
        const index = notes.value.findIndex(note => note.id === id)
        if (index !== -1) {
          notes.value[index] = data.data
        }
        return { success: true, message: 'Note updated successfully' }
      }
      return { success: false, message: data.message }
    } catch (error) {
      return { success: false, message: 'Error updating note' }
    }
  }

  const deleteNote = async (id) => {
    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: 'DELETE',
      })
      const data = await response.json()
      if (data.success) {
        notes.value = notes.value.filter(note => note.id !== id)
        return { success: true, message: 'Note deleted successfully' }
      }
      return { success: false, message: data.message }
    } catch (error) {
      return { success: false, message: 'Error deleting note' }
    }
  }

  const togglePin = async (id) => {
    try {
      const response = await fetch(`/api/notes/${id}/pin`, {
        method: 'PUT'
      })
      const data = await response.json()
      if (data.success) {
        // Update local state by re-fetching to maintain proper order
        await fetchNotes()
        return { success: true, message: 'Note pin toggled successfully' }
      }
      return { success: false, message: data.message }
    } catch (error) {
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