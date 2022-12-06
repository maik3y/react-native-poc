import { DefaultTheme } from '@react-navigation/native'

export const DEFAULT_THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
    text: '#000'
  }
}
