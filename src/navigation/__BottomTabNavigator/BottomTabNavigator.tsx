import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Pressable } from 'react-native'
import { RootTabParamList, RootTabScreenProps } from '../../../types'
import TabBarIcon, { ICON_TYPE } from '../../components/TabBarIcon/TabBarIcon'
import Colors from '../../constants/Colors'
import useColorScheme from '../../hooks/useColorScheme'
import ContractenScreen from '../../screens/ContractenScreen'
import ScanScreen from '../../screens/ScanScreen/ScanScreen'
import TicketsScreen from '../../screens/TicketsScreen'
import TransportScreen from '../../screens/TransportScreen/TransportScreen'

const Tab = createBottomTabNavigator<RootTabParamList>()

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme()

  return (
    <Tab.Navigator
      initialRouteName="ContractenScreen"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint
      }}>
      <Tab.Screen
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
                style={{ marginRight: 15 }}
              />
            </Pressable>
          )
        })}
      />
      <Tab.Screen
        name="TicketsScreen"
        component={TicketsScreen}
        options={({ navigation }: RootTabScreenProps<'TicketsScreen'>) => ({
          title: 'Jouw tickets',
          tabBarIcon: () => (
            <TabBarIcon
              name="format-list-checks"
              size={24}
              color={Colors[colorScheme].text}
              type={ICON_TYPE.MCI}
            />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1
              })}>
              <AntDesign
                name="pluscircle"
                size={30}
                style={{ marginRight: 15 }}
                color={Colors[colorScheme].main}
              />
            </Pressable>
          )
        })}
      />
      <Tab.Screen
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
      <Tab.Screen
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
    </Tab.Navigator>
  )
}
