import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  NavigationContainer,
  NavigatorScreenParams
} from '@react-navigation/native'
import React from 'react'
import { useColorScheme } from 'react-native'
import Colors from '../constants/Colors'
import { DARK_THEME } from '../constants/theme/DarkTheme'
import { DEFAULT_THEME } from '../constants/theme/DefaultTheme'
import { ContractProps } from '../screens/ContractsScreen/hooks/useContracts'
import ContractsIcon from '../screens/ContractsScreen/icons/ContractenIcon'
import ScanIcon from '../screens/ScanScreen/icons/ScanIcon'
import ScanScreen from '../screens/ScanScreen/ScanScreen'

import TicketsIcon from '../screens/TicketsScreen/icons/TicketsIcon'
import TransportIcon from '../screens/TransportScreen/icons/TransportIcon'
import TransportScreen from '../screens/TransportScreen/TransportScreen'
import ContractsScreenStack, {
  ContractsStackParams
} from './stacks/ContractenStack'
import TicketsScreenStack, { TicketsStackParams } from './stacks/TicketsStack'

export type RootStackParams = {
  ContractsStack: NavigatorScreenParams<ContractsStackParams>
  Contract: {
    data: ContractProps
  }
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
          tabBarActiveTintColor: colorScheme
            ? Colors[colorScheme].tabBarActiveTintColor
            : '',
          tabBarInactiveTintColor: colorScheme
            ? Colors[colorScheme].tabBarInactiveTintColor
            : ''
        })}>
        <RootStack.Screen
          name="ContractsStack"
          component={ContractsScreenStack}
          options={{
            title: 'Contracts',
            tabBarIcon: ({ color, size }) => (
              <ContractsIcon color={color} size={size} />
            ),
            tabBarLabel: 'Contracts'
          }}
        />
        <RootStack.Screen
          name="TicketsStack"
          component={TicketsScreenStack}
          options={{
            title: 'Tickets',
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
