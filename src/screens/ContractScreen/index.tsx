import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { useStyled } from '../../hooks/useStyled'
import { AppStackParams } from '../../router/stacks/AppStack'

type Props = NativeStackScreenProps<AppStackParams, 'Contract'>

export default function TicketScreen({ route, navigation }: Props) {
  const { View, Text, Pressable } = useStyled()
  const { name, address, referenceNumber } = route.params.data
  return (
    <View tw="flex-1">
      <Text tw="text-lg font-bold pt-5 text-center dark:text-white">
        {name} - {referenceNumber}
      </Text>
      <Text tw="text-sm text-center dark:text-white">{address}</Text>
      <View tw="flex-1 flex-row justify-center items-center">
        <Pressable
          onPress={() => {
            navigation.goBack()
          }}>
          <Text tw="text-blue-500 px-10 text-lg">Go back</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('Transport')
          }}>
          <Text tw="text-blue-500 px-10 text-lg">To Transport</Text>
        </Pressable>
      </View>
    </View>
  )
}
