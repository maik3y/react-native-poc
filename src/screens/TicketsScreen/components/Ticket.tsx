import React from 'react'
import { Alert } from 'react-native'
import { TicketProps } from '../hooks/useTickets'
import { useStyled } from '../../../hooks/useStyled'

export default function Ticket({ data }: { data: TicketProps }) {
  const { View, Text, Pressable, MaterialCommunityIcons } = useStyled()

  const handlePress = () => {
    Alert.alert('clicked')
  }

  return (
    <Pressable
      tw="flex flex-row h-14 mb-3 items-center border border-cyan-700 rounded-xl overflow-hidden"
      onPress={() => handlePress()}>
      <View tw="flex flex-col w-1/4 h-full justify-center bg-cyan-700">
        <Text tw="text-center font-bold text-white text-md">{data.id}</Text>
      </View>
      <View tw="relative w-3/4 px-3">
        <Text tw="w-full mb-1 text-xs dark:text-white text-cyan-700">
          {data.action}
        </Text>
        <Text tw="w-full text-xs dark:text-white text-cyan-700">
          {data.actionDate}
        </Text>
        <MaterialCommunityIcons
          tw="absolute right-2 top-3 -mt-1 dark:text-white text-cyan-700"
          name="greater-than"
          size={20}
        />
      </View>
    </Pressable>
  )
}
