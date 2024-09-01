import { useTheme } from 'vuetify'

const theme = useTheme()

export default function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

