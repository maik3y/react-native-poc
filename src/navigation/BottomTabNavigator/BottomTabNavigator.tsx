import { FontAwesome } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Pressable } from 'react-native'
import { RootTabParamList, RootTabScreenProps } from '../../../types'
import TabBarIcon, { ICON_TYPE } from '../../components/TabBarIcon/TabBarIcon'
import Colors from '../../constants/Colors'
import useColorScheme from '../../hooks/useColorScheme'
import ContractenScreen from '../../screens/ContractenScreen/ContractenScreen'
import ScanScreen from '../../screens/ScanScreen/ScanScreen'
import TicketsScreen from '../../screens/TicketsScreen/TicketsScreen'
import TransportScreen from '../../screens/TransportScreen/TransportScreen'

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>()

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme() // TODO: nativewind implementation

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
              size={24}
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
              size={24}
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
              size={24}
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
              size={24}
              color={Colors[colorScheme].text}
              type={ICON_TYPE.ION}
            />
          )
        }}
      />
    </BottomTab.Navigator>
  )
}
