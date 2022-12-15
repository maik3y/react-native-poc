import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { useColorScheme } from 'react-native'
import { DARK_THEME } from '../constants/theme/DarkTheme'
import { DEFAULT_THEME } from '../constants/theme/DefaultTheme'
import useAuth from '../hooks/useAuth'
import AppStack from './stacks/AppStack'
import AuthStack from './stacks/AuthStack'

export default function Router() {
  const colorScheme = useColorScheme()
  const { isLoggedIn } = useAuth()

  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DARK_THEME : DEFAULT_THEME}>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}
