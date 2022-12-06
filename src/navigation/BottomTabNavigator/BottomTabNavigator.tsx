import { FontAwesome } from '@expo/vector-icons'
import {
  BottomTabBarProps,
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs'
import { useColorScheme } from 'nativewind'
import React from 'react'
import { Pressable } from 'react-native'
import { RootTabParamList, RootTabScreenProps } from '../../../types'
import TabBarIcon, { ICON_TYPE } from '../../components/TabBarIcon/TabBarIcon'
import ContractenScreen from '../../screens/ContractenScreen/ContractenScreen'
import ScanScreen from '../../screens/ScanScreen/ScanScreen'
import TicketsScreen from '../../screens/TicketsScreen/TicketsScreen'
import TransportScreen from '../../screens/TransportScreen/TransportScreen'
import CustomTabBar from '../CustomTabBar/CustomTabBar'

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const Tab = createBottomTabNavigator<RootTabParamList>()

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="ContractenScreen"
      tabBar={(props: BottomTabBarProps) => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="ContractenScreen"
        component={ContractenScreen}
        options={({ navigation }: RootTabScreenProps<'ContractenScreen'>) => ({
          title: 'Contracten',
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1
              })}>
              <FontAwesome
                name="info-circle"
                size={30}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          )
        })}
      />
      <Tab.Screen name="TicketsScreen" component={TicketsScreen} />
      <Tab.Screen name="TransportScreen" component={TransportScreen} />
      <Tab.Screen name="ScanScreen" component={ScanScreen} />
    </Tab.Navigator>
  )
}
