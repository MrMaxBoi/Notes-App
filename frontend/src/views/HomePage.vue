<template>
  <div>
    <h1 class="text-h3 text-center mb-8">📝 My Notes</h1>
    
    <v-row v-if="loading">
      <v-col class="text-center">
        <v-progress-circular indeterminate></v-progress-circular>
        <p>Loading notes...</p>
      </v-col>
    </v-row>

    <v-row v-else-if="notes.length === 0">
      <v-col class="text-center">
        <v-card class="pa-8">
          <h3>No notes found 📝</h3>
          <v-btn color="primary" to="/create" class="mt-4">
            Create your first note
          </v-btn>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-else>
      <v-col v-for="note in notes" :key="note.id" cols="12" md="6" lg="4">
        <v-card>
          <v-card-title>{{ note.title }}</v-card-title>
          <v-card-text>{{ note.content }}</v-card-text>
          <v-card-actions>
            <small>{{ formatDate(note.createdAt) }}</small>
            <v-spacer></v-spacer>
            <v-btn icon="mdi-pencil" size="small" @click="editNote(note)"></v-btn>
            <v-btn icon="mdi-delete" size="small" color="error" @click="deleteNote(note.id)"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-fab icon="mdi-plus" location="bottom end" @click="$router.push('/create')"></v-fab>

    <!-- Edit Dialog -->
    <v-dialog v-model="editDialog" max-width="600px">
      <v-card>
        <v-card-title>✏️ Edit Note</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="editData.title"
            label="Title"
            variant="outlined"
            class="mb-4"
          ></v-text-field>
          <v-textarea
            v-model="editData.content"
            label="Content"
            variant="outlined"
            rows="6"
          ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="editDialog = false">Cancel</v-btn>
          <v-btn color="primary" @click="saveEdit" :loading="saving">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Delete Confirmation Dialog -->
    <v-dialog v-model="deleteDialog" max-width="400px">
      <v-card>
        <v-card-title>🗑️ Delete Note</v-card-title>
        <v-card-text>
          Are you sure you want to delete "{{ noteToDelete?.title }}"?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="deleteDialog = false">Cancel</v-btn>
          <v-btn color="error" @click="confirmDelete" :loading="deleting">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useNotesStore } from '../stores/notes'

export default {
  name: 'HomePage',
  setup() {
    const notesStore = useNotesStore()
    const { notes, loading } = storeToRefs(notesStore)
    const editDialog = ref(false)
    const deleteDialog = ref(false)
    const saving = ref(false)
    const deleting = ref(false)
    const editData = ref({ id: null, title: '', content: '' })
    const noteToDelete = ref(null)

    onMounted(() => {
      notesStore.fetchNotes()
    })

    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString()
    }

    const editNote = (note) => {
      editData.value = { ...note }
      editDialog.value = true
    }

    const saveEdit = async () => {
      saving.value = true
      try {
        await notesStore.updateNote(editData.value.id, {
          title: editData.value.title,
          content: editData.value.content
        })
        editDialog.value = false
      } catch (error) {
        console.error('Error updating note:', error)
      } finally {
        saving.value = false
      }
    }

    const deleteNote = (id) => {
      const note = notes.value.find(n => n.id === id)
      noteToDelete.value = note
      deleteDialog.value = true
    }

    const confirmDelete = async () => {
      deleting.value = true
      try {
        await notesStore.deleteNote(noteToDelete.value.id)
        deleteDialog.value = false
        noteToDelete.value = null
      } catch (error) {
        console.error('Error deleting note:', error)
      } finally {
        deleting.value = false
      }
    }

    return {
      notes,
      loading,
      editDialog,
      deleteDialog,
      saving,
      deleting,
      editData,
      noteToDelete,
      formatDate,
      editNote,
      saveEdit,
      deleteNote,
      confirmDelete
    }
  }
}
</script>