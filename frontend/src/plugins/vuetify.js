import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          background: '#F7F3E9',
          surface: '#FFFFFF',
          primary: '#91A88C',
          secondary: '#6E6E6E',
          accent: '#A8C4A2',
          error: '#D32F2F',
          info: '#1976D2',
          success: '#388E3C',
          warning: '#F57C00',
          'on-background': '#2E2C27',
          'on-surface': '#2E2C27',
          'on-primary': '#FFFFFF',
          'surface-variant': '#E7E3D6'
        }
      },
      dark: {
        colors: {
          background: '#292825ff', 
          surface: '#44423dff',
          primary: '#8FA590',
          secondary: '#AAA79F',
          accent: '#91A88C',
          error: '#EF5350',
          info: '#42A5F5',
          success: '#66BB6A',
          warning: '#FFA726',
          'on-background': '#ECE9E4',
          'on-surface': '#ECE9E4',
          'on-primary': '#1F1E1B',
          'surface-variant': '#3A3935'
        }
      }
    }
  },
  defaults: {
    VCard: {
      elevation: 3,
      rounded: 'lg',
      style: 'box-shadow: 0 4px 12px rgba(0,0,0,0.08); transition: all 0.3s ease;'
    },
    VBtn: {
      rounded: 'lg',
      style: 'transition: all 0.2s ease;'
    },
    VTextField: {
      variant: 'outlined',
      rounded: 'lg'
    },
    VTextarea: {
      variant: 'outlined',
      rounded: 'lg'
    }
  }
})