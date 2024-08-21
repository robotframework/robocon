import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';


// Theme
const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#fefefe',
    base: "#fcf7f0",
    surface: '#fcf7f0',
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
    background: '#181833',
    base: "#222222",
    surface: '#fefefe',
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