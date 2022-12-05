/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ColorSchemeName, Pressable } from 'react-native'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import ModalScreen from '../screens/ModalScreen/ModalScreen'
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps
} from '../../types'
import LinkingConfiguration from './LinkingConfiguration'
import LoginScreen from '../screens/LoginScreen/LoginScreen'
import TicketsScreen from '../screens/TicketsScreen/TicketsScreen'
import TabBarIcon, {
  ICON_TYPE,
  TabBarIconProps
} from '../components/TabBarIcon/TabBarIcon'
import ContractenScreen from '../screens/ContractenScreen/ContractenScreen'
import TransportScreen from '../screens/TransportScreen/TransportScreen'
import ScanScreen from '../screens/ScanScreen/ScanScreen'
import { DARK_THEME } from '../constants/theme/DarkTheme'
import { DEFAULT_THEME } from '../constants/theme/DefaultTheme'

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

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
  const user = true
  return !user ? (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>()

function BottomTabNavigator() {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName="ContractenScreen"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint
      }}>
      <BottomTab.Screen
        name="ContractenScreen"
        component={ContractenScreen}
        options={({ navigation }: RootTabScreenProps<'ContractenScreen'>) => ({
          title: 'Contracten',
          tabBarIcon: () => (
            <TabBarIcon
              name="clipboard-check"
              size={30}
              color={Colors[colorScheme].text}
              type={ICON_TYPE.FA_5}
            />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1
              })}>
              <FontAwesome
                name="info-circle"
                size={30}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          )
        })}
      />
      <BottomTab.Screen
        name="TicketsScreen"
        component={TicketsScreen}
        options={{
          title: 'Tickets',
          tabBarIcon: () => (
            <TabBarIcon
              name="format-list-checks"
              size={30}
              color={Colors[colorScheme].text}
              type={ICON_TYPE.MCI}
            />
          )
        }}
      />
      <BottomTab.Screen
        name="TransportScreen"
        component={TransportScreen}
        options={{
          title: 'Transport',
          tabBarIcon: () => (
            <TabBarIcon
              name="truck"
              size={30}
              color={Colors[colorScheme].text}
              type={ICON_TYPE.FA_5}
            />
          )
        }}
      />
      <BottomTab.Screen
        name="ScanScreen"
        component={ScanScreen}
        options={{
          title: 'Scan',
          tabBarIcon: () => (
            <TabBarIcon
              name="qr-code-outline"
              size={30}
              color={Colors[colorScheme].text}
              type={ICON_TYPE.ION}
            />
          )
        }}
      />
    </BottomTab.Navigator>
  )
}
