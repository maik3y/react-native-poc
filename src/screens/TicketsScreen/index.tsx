import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'

import { useStyled } from '../../hooks/useStyled'
import { TicketsStackParams } from '../../navigation/stacks/TicketsStack'
import TicketCard from './components/TicketCard'
import { TicketProps, useTickets } from './hooks/useTickets'

type Props = NativeStackScreenProps<TicketsStackParams, 'Tickets'>

export default function TicketsScreen({ navigation }: Props) {
  const { View, Text, ScrollView } = useStyled()
  const { isSuccess, data, error, isLoading, isFetching } = useTickets()

  if (isFetching)
    return (
      <View tw="flex-1 justify-center items-center">
        <Text tw="text-lg dark:color-white">Fetching...</Text>
      </View>
    )

  if (isLoading)
    return (
      <View tw="flex-1 justify-center items-center">
        <Text tw="text-lg dark:color-white">Loading...</Text>
      </View>
    )

  if (error instanceof Error)
    return (
      <View tw="flex-1 justify-center items-center">
        <Text tw="text-lg dark:color-white">
          An error has occurred: <Text tw="font-bold">{error.message}</Text>
        </Text>
      </View>
    )

  return isSuccess ? (
    <ScrollView tw="p-4">
      {data.map((item: TicketProps, index: number) => (
        <TicketCard
          key={index}
          data={item}
          onPress={(id: number) => {
            navigation.navigate('Ticket', { id })
          }}
        />
      ))}
    </ScrollView>
  ) : null
}