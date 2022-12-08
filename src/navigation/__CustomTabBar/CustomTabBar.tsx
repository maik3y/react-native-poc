import React from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'

import TabBarIcon, { ICON_TYPE } from '../../components/TabBarIcon/TabBarIcon'
import Colors from '../../constants/Colors'
import { useStyled } from '../../hooks/useStyled'
import { useColorScheme } from 'react-native'

interface MenuItemProps {
  icon: {
    name: string
    size: number
    type?: ICON_TYPE
  }
  onPressHandlerCallBack: () => void
  label?: string
  showLabel?: boolean
}

export default function CustomTabBar({ navigation }: BottomTabBarProps) {
  const { View, Text, Pressable } = useStyled()
  const colorScheme = useColorScheme()
  const ICON_SIZE = 24

  const MenuItem = ({
    icon,
    onPressHandlerCallBack,
    label,
    showLabel = false
  }: MenuItemProps) => {
    return (
      <Pressable
        tw="flex w-1/5 pt-2 pb-8 self-center"
        onPress={() => onPressHandlerCallBack()}>
        <View tw="self-center">
          <TabBarIcon
            color={colorScheme ? Colors[colorScheme].text : undefined}
            name={icon.name}
            size={icon.size}
            type={icon?.type ? icon.type : undefined}
          />
        </View>
        {showLabel ? (
          <Text tw="text-xs mt-2 color-white self-center color-black dark:color-white">
            {label}
          </Text>
        ) : null}
      </Pressable>
    )
  }

  return (
    <View tw="inline-flex flex-row w-full justify-center items-center border-t border-gray-100 bg-white dark:bg-black">
      <MenuItem
        showLabel
        label="Contracten"
        icon={{
          name: 'clipboard-check',
          size: ICON_SIZE,
          type: ICON_TYPE.FA_5
        }}
        onPressHandlerCallBack={() =>
          void navigation.navigate('ContractenScreen')
        }
      />
      <MenuItem
        showLabel
        label="Tickets"
        icon={{
          name: 'format-list-checks',
          size: ICON_SIZE,
          type: ICON_TYPE.MCI
        }}
        onPressHandlerCallBack={() => void navigation.navigate('TicketsScreen')}
      />
      <MenuItem
        showLabel
        label="Transport"
        icon={{
          name: 'truck',
          size: ICON_SIZE,
          type: ICON_TYPE.FA_5
        }}
        onPressHandlerCallBack={() =>
          void navigation.navigate('TransportScreen')
        }
      />
      <MenuItem
        showLabel
        label="Scan"
        icon={{
          name: 'qr-code-outline',
          size: ICON_SIZE,
          type: ICON_TYPE.ION
        }}
        onPressHandlerCallBack={() => void navigation.navigate('ScanScreen')}
      />
    </View>
  )
}
