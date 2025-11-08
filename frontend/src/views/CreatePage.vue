<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card elevation="4">
          <v-card-title class="text-h4 text-center pa-6">
            ✍️ Create New Note
          </v-card-title>
          
          <v-card-text class="pa-6">
            <v-form @submit.prevent="handleSubmit">
              <v-text-field
                v-model="noteData.title"
                label="Note Title"
                variant="outlined"
                :rules="titleRules"
                class="mb-4"
                prepend-inner-icon="mdi-format-title"
              ></v-text-field>

              <v-textarea
                v-model="noteData.content"
                label="Note Content"
                variant="outlined"
                :rules="contentRules"
                rows="8"
                prepend-inner-icon="mdi-text"
              ></v-textarea>

              <v-row class="mt-4">
                <v-col cols="6">
                  <v-btn
                    variant="outlined"
                    block
                    @click="$router.push('/')"
                  >
                    Cancel
                  </v-btn>
                </v-col>
                <v-col cols="6">
                  <v-btn
                    type="submit"
                    color="primary"
                    block
                    :loading="loading"
                  >
                    Create Note
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      :timeout="3000"
    >
      {{ snackbar.message }}
    </v-snackbar>
  </v-container>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useNotesStore } from '../stores/notes'

export default {
  name: 'CreatePage',
  setup() {
    const router = useRouter()
    const notesStore = useNotesStore()
    
    const noteData = ref({
      title: '',
      content: ''
    })
    
    const loading = ref(false)
    const snackbar = ref({
      show: false,
      message: '',
      color: 'success'
    })

    const titleRules = [
      v => !!v || 'Title is required',
      v => v.length >= 3 || 'Title must be at least 3 characters'
    ]

    const contentRules = [
      v => !!v || 'Content is required',
      v => v.length >= 10 || 'Content must be at least 10 characters'
    ]

    const showSnackbar = (message, color = 'success') => {
      snackbar.value = {
        show: true,
        message,
        color
      }
    }

    const handleSubmit = async () => {
      if (!noteData.value.title || !noteData.value.content) {
        showSnackbar('Please fill in all fields', 'error')
        return
      }

      loading.value = true
      
      try {
        const result = await notesStore.createNote(noteData.value)
        
        if (result.success) {
          showSnackbar(result.message, 'success')
          noteData.value = { title: '', content: '' }
          setTimeout(() => {
            router.push('/')
          }, 1500)
        } else {
          showSnackbar(result.message, 'error')
        }
      } catch (error) {
        showSnackbar('Error creating note', 'error')
      } finally {
        loading.value = false
      }
    }

    return {
      noteData,
      loading,
      snackbar,
      titleRules,
      contentRules,
      handleSubmit
    }
  }
}
</script>