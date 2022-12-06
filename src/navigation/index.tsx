/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ColorSchemeName, View } from 'react-native'
import LinkingConfiguration from './LinkingConfiguration'
import { DARK_THEME } from '../constants/theme/DarkTheme'
import { DEFAULT_THEME } from '../constants/theme/DefaultTheme'
import RootNavigator from './RootNavigator/RootNavigator'

export default function Navigation({
  colorScheme
}: {
  colorScheme: ColorSchemeName
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DARK_THEME : DEFAULT_THEME}>
      <RootNavigator />
    </NavigationContainer>
  )
}
