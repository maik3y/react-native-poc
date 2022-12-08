import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { useStyled } from '../../hooks/useStyled'
import { RootStackParams } from '../../navigation'

type Props = NativeStackScreenProps<RootStackParams, 'Ticket'>

export default function TicketScreen({ route, navigation }: Props) {
  const { View, Text, Pressable } = useStyled()

  return (
    <View tw="flex-1 justify-center items-center">
      <Text tw="text-lg font-bold">{route.params.id}</Text>
      <Pressable
        onPress={() => {
          navigation.navigate('Scan')
        }}>
        <Text>To scan</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.goBack()
        }}>
        <Text>Go back</Text>
      </Pressable>
    </View>
  )
}
