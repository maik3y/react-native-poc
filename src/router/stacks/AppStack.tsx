import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigatorScreenParams } from '@react-navigation/native'
import React from 'react'
import { useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { ContractProps } from '../../screens/ContractsScreen/hooks/useContracts'
import ContractsIcon from '../../screens/ContractsScreen/icons/ContractenIcon'
import ScanIcon from '../../screens/ScanScreen/icons/ScanIcon'
import ScanScreen from '../../screens/ScanScreen/ScanScreen'
import TicketsIcon from '../../screens/TicketsScreen/icons/TicketsIcon'
import TransportIcon from '../../screens/TransportScreen/icons/TransportIcon'
import TransportScreen from '../../screens/TransportScreen/TransportScreen'
import ContractsScreenStack, { ContractsStackParams } from './ContractenStack'
import TicketsScreenStack, { TicketsStackParams } from './TicketsStack'

export type AppStackParams = {
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

const RootStack = createBottomTabNavigator<AppStackParams>()

export default function AppStack() {
  const colorScheme = useColorScheme()

  return (
    <RootStack.Navigator
      initialRouteName="ContractsStack"
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
  )
}
