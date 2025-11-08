<template>
  <v-app>
    <v-app-bar color="primary" dark>
      <v-app-bar-title>📝 Notes App</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="toggleTheme">
        <v-icon>{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
      </v-btn>
      <v-btn to="/create" prepend-icon="mdi-plus">New Note</v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
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