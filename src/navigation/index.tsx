import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  NavigationContainer,
  NavigatorScreenParams
} from '@react-navigation/native'
import React from 'react'
import { useColorScheme } from 'react-native'
import { DARK_THEME } from '../constants/theme/DarkTheme'
import { DEFAULT_THEME } from '../constants/theme/DefaultTheme'
import ContractenIcon from '../screens/ContractenScreen/icons/ContractenIcon'
import ScanIcon from '../screens/ScanScreen/icons/ScanIcon'
import ScanScreen from '../screens/ScanScreen/ScanScreen'

import TicketsIcon from '../screens/TicketsScreen/icons/TicketsIcon'
import TransportIcon from '../screens/TransportScreen/icons/TransportIcon'
import TransportScreen from '../screens/TransportScreen/TransportScreen'
import ContractenScreenStack, {
  ContractenStackParams
} from './stacks/ContractenStack'
import TicketsScreenStack, { TicketsStackParams } from './stacks/TicketsStack'

export type RootStackParams = {
  ContractenStack: NavigatorScreenParams<ContractenStackParams>
  TicketsStack: NavigatorScreenParams<TicketsStackParams>
  Ticket: {
    id: number
  }
  Transport: undefined
  Scan: undefined
}

const RootStack = createBottomTabNavigator<RootStackParams>()

const AppTabNavigator = () => {
  const colorScheme = useColorScheme()

  // TODO: Linking configuration for NavigationContainer?
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DARK_THEME : DEFAULT_THEME}>
      <RootStack.Navigator
        initialRouteName="TicketsStack"
        screenOptions={() => ({
          tabBarActiveTintColor: 'purple',
          tabBarInactiveTintColor: 'gray'
        })}>
        <RootStack.Screen
          name="ContractenStack"
          component={ContractenScreenStack}
          options={{
            title: 'Contracten',
            tabBarIcon: ({ color, size }) => (
              <ContractenIcon color={color} size={size} />
            ),
            tabBarLabel: 'Contracten'
          }}
        />
        <RootStack.Screen
          name="TicketsStack"
          component={TicketsScreenStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <TicketsIcon color={color} size={size} />
            ),
            tabBarLabel: 'Tickets'
          }}
        />
        <RootStack.Screen
          name="Transport"
          component={TransportScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <TransportIcon color={color} size={size} />
            ),
            tabBarLabel: 'Transport'
          }}
        />
        <RootStack.Screen
          name="Scan"
          component={ScanScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <ScanIcon color={color} size={size} />
            ),
            tabBarLabel: 'Scan'
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default AppTabNavigator
