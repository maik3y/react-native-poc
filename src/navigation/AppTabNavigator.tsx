import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  NavigationContainer,
  NavigatorScreenParams
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import ContractenScreen from '../screens/ContractenScreen'
import ContractenIcon from '../screens/ContractenScreen/icons/ContractenIcon'
import ScanIcon from '../screens/ScanScreen/icons/ScanIcon'
import ScanScreen from '../screens/ScanScreen/ScanScreen'
import TicketScreen from '../screens/TicketScreen'
import TicketsScreen from '../screens/TicketsScreen'
import TicketsIcon from '../screens/TicketsScreen/icons/TicketsIcon'
import TransportIcon from '../screens/TransportScreen/icons/TransportIcon'
import TransportScreen from '../screens/TransportScreen/TransportScreen'

export type RootStackParams = {
  ContractenStack: NavigatorScreenParams<ContractenStackParams>
  TicketsStack: NavigatorScreenParams<TicketsStackParams>
  Ticket: {
    name: string
  }
  Transport: undefined
  Scan: undefined
}

const RootStack = createBottomTabNavigator<RootStackParams>()

export type TicketsStackParams = {
  Tickets: undefined
  Ticket: {
    name: string
  }
}

const TicketsStack = createNativeStackNavigator<TicketsStackParams>()

const TicketsScreenStack = () => {
  return (
    <TicketsStack.Navigator
      initialRouteName="Tickets"
      screenOptions={{
        headerShown: false
      }}>
      <TicketsStack.Screen name="Tickets" component={TicketsScreen} />
      <TicketsStack.Screen name="Ticket" component={TicketScreen} />
    </TicketsStack.Navigator>
  )
}

export type ContractenStackParams = {
  Contracten: undefined
  contract: {
    name: string
  }
}

const ContractenStack = createNativeStackNavigator<ContractenStackParams>()

const ContractenScreenStack = () => {
  return (
    <ContractenStack.Navigator
      initialRouteName="Contracten"
      screenOptions={{
        headerShown: false
      }}>
      <ContractenStack.Screen name="Contracten" component={ContractenScreen} />
      {/* <ContractenStack.Screen name="Contract" component={ContractScreen} /> */}
    </ContractenStack.Navigator>
  )
}

const AppTabNavigator = () => {
  return (
    <NavigationContainer>
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
