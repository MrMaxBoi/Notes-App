<template>
  <v-app>
    <v-app-bar color="primary" elevation="0" style="background: rgba(145, 168, 140, 0.9) !important; backdrop-filter: blur(20px);">
      <v-app-bar-title class="font-weight-medium">
        <div 
          class="glass-title"
          @click="$router.push('/')"
          style="cursor: pointer; font-size: 1.25rem; font-family: 'Merriweather', serif; font-weight: 400; letter-spacing: 0.01em; color: white; display: inline-block;"
        >
        📝 Notes App
        </div>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn 
        icon
        @click="toggleTheme"
        class="glass-button mr-2"
        variant="flat"
        style="border-radius: 12px;"
      >
        <v-icon>{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
      </v-btn>
      <v-btn 
        @click="$router.push('/create')"
        class="glass-button"
        variant="flat"
        prepend-icon="mdi-plus"
        style="border-radius: 12px;"
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