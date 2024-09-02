import '@mdi/font/css/materialdesignicons.css';
import { createVuetify, type ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';

const sharedOptions = {
  variables: {
    'font-rbcn': "RBCN",
    'font-title': "OCRA",
    'font-body': "Courier Code",
  },
  defaults: {
    VCard: {
      rounded: 'lg',
      elevation: '0'
    },
    VTextField: {
      rounded: 'sm'
    },
  }
}

// Theme
const light: ThemeDefinition = {
  dark: false,
  colors: {
    surface: '#fcf7f0',
    'surface-bright': '#fffcf9',
    'surface-bg': '#f3f3f3',
    "surface-dark": '#ebe7e0',
    primary: '#020d67',
    'primary-darken-1': '#b2540b',
    secondary: '#0032a3',
    'secondary-darken-1': '#006ea9',
    tertiary: '#2656ed',

    white: '#fff',
    grey: '#e7e7e7',
    'grey-10': '#c6c6c6',
    "grey-30": '#ababab',
    "grey-50": '#737373',
    'grey-60': '#666',
    "grey-70": '#404040',
    'grey-90': '#282828',
    black: '#121212' /* body text */,
    link: '#002b91',
    error: '#d32f2f'
  },
  ...sharedOptions,
};



const dark: ThemeDefinition = {
  dark: true,
  colors: {
    base: '#222222',
    'surface-bright': '#181833',
    surface: '#222222',
    primary: '#020d67',
    'primary-darken-1': '#b2540b',
    secondary: '#0032a3',
    'secondary-darken-1': '#006ea9',
    tertiary: '#2656ed',
    white: '#fff',
    grey: '#e7e7e7',
    'grey-10': '#c6c6c6',
    "grey-30": '#ababab',
    "grey-50": '#737373',
    'grey-60': '#666',
    "grey-70": '#404040',
    'grey-90': '#282828',
    black: '#121212' /* body text */,
    link: '#002b91',
    error: '#d32f2f'
  },
  ...sharedOptions,
};

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    variations: {
      colors: ['primary', 'secondary'],
      lighten: 1,
      darken: 2,
    },
    themes: {
      light,
      dark
    }
  }
});
