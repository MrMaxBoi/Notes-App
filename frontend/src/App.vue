<template>
  <v-app>
    <v-app-bar color="primary" elevation="3" style="backdrop-filter: blur(10px);">
      <v-app-bar-title class="font-weight-medium">
        <v-btn 
          to="/" 
          variant="text" 
          :color="isDark ? 'on-primary' : 'white'"
          style="text-transform: none; font-size: 1.25rem; font-family: 'Merriweather', serif; font-weight: 400; letter-spacing: 0.01em;"
        >
        📝 Notes App
        </v-btn>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn 
        icon 
        @click="toggleTheme" 
        class="mr-2"
        style="transition: transform 0.2s ease;"
      >
        <v-icon>{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
      </v-btn>
      <v-btn 
        to="/create" 
        prepend-icon="mdi-plus" 
        rounded="lg"
        style="transition: all 0.2s ease;"
      >
        New Note
      </v-btn>
    </v-app-bar>

    <v-main style="transition: background-color 0.3s ease;">
      <v-container class="py-8">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { ref } from 'vue'
import { useTheme } from 'vuetify'

export default {
  name: 'App',
  setup() {
    const theme = useTheme()
    const isDark = ref(false)

    const toggleTheme = () => {
      theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
      isDark.value = !isDark.value
    }

    return {
      isDark,
      toggleTheme
    }
  }
}
</script>