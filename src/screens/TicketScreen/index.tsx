import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageTitle from '../../components/PageTitle/PageTitle'
import { useStyled } from '../../hooks/useStyled'
import { AppStackParams } from '../../router/stacks/AppStack'

type Props = NativeStackScreenProps<AppStackParams, 'Ticket'>

export default function TicketScreen({ route, navigation }: Props) {
  const { View, Text, Pressable } = useStyled()

  return (
    <SafeAreaView>
      <PageTitle title="Ticket" />
      <View tw="flex h-full justify-center">
        <Text tw="text-lg  px-4 dark:text-white">{route.params.id}</Text>
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
    </SafeAreaView>
  )
}
