import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';


// Theme
const light: ThemeDefinition = {
  dark: false,
  colors: {
    surface: '#fcf7f0',
    "surface-bright": '#f3f3f3',
    primary: '#020d67',
    'primary-darken-1': '#b2540b',
    secondary: '#0032a3',
    'secondary-darken-1': '#006ea9',
    tertiary: '#2656ed',

    white: "#fff",
    grey: "#e7e7e7",
    "grey-10": "#c6c6c6",
    "grey-20": "#666",
    "grey-30": "#2c2c2c",
    black: "#121212", /* body text */
    link: "#002b91",
    error: '#d32f2f',
  },
}

const dark: ThemeDefinition = {
  dark: true,
  colors: {
    base: "#222222",
    "surface-bright": '#181833',
    surface: '#222222',
    primary: '#020d67',
    'primary-darken-1': '#b2540b',
    secondary: '#0032a3',
    'secondary-darken-1': '#006ea9',
    tertiary: '#2656ed',

    white: "#fff",
    grey: "#e7e7e7",
    "grey-10": "#c6c6c6",
    "grey-20": "#666",
    "grey-30": "#2c2c2c",
    black: "#121212", /* body text */
    link: "#002b91",
    error: '#d32f2f',
  },
}


export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light,
      dark
    },
  }
})