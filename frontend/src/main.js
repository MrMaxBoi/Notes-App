import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { LiquidGlass } from '@wxperia/liquid-glass-vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(vuetify)
app.use(router)
app.component('LiquidGlass', LiquidGlass)
app.mount('#app')
