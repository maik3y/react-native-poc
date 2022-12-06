import { DarkTheme } from '@react-navigation/native'

export const DARK_THEME = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#000',
    text: '#fff'
  }
}
