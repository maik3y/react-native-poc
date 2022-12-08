import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { useStyled } from '../../hooks/useStyled'
import { RootStackParams } from '../../navigation'

type Props = NativeStackScreenProps<RootStackParams, 'Ticket'>

export default function TicketScreen({ route, navigation }: Props) {
  const { View, Text, Pressable } = useStyled()

  return (
    <View tw="flex-1">
      <Text tw="text-lg font-bold py-5 text-center dark:text-white">
        Ticket: {route.params.id}
      </Text>
      <View tw="flex-1 flex-row justify-center items-center">
        <Pressable
          onPress={() => {
            navigation.goBack()
          }}>
          <Text tw="text-blue-500 px-10 text-lg">Go back</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('Scan')
          }}>
          <Text tw="text-blue-500 px-10 text-lg">To scan</Text>
        </Pressable>
      </View>
    </View>
  )
}
