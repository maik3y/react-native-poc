import React from 'react'
import { Button } from 'react-native'
import { RootTabScreenProps } from '../../../types'

import { useStyled } from '../../hooks/useStyled'
import Ticket from './components/Ticket'
import { TicketProps, useTickets } from './hooks/useTickets'

export default function TicketsScreen({
  navigation
}: RootTabScreenProps<'TicketsScreen'>) {
  const { View, Text, ScrollView } = useStyled()
  const { isSuccess, data, error, isLoading, isFetching } = useTickets()

  if (isFetching)
    return (
      <View tw="flex justify-center items-center">
        <Text tw="dark:color-white">Fetching...</Text>
      </View>
    )

  if (isLoading)
    return (
      <View tw="flex justify-center items-center">
        <Text tw="dark:color-white">Loading...</Text>
      </View>
    )

  if (error instanceof Error)
    return (
      <View tw="flex justify-center items-center">
        <Text tw="dark:color-white">
          An error has occurred: {error.message}
        </Text>
      </View>
    )

  return isSuccess ? (
    <ScrollView tw="p-4">
      {data.map((item: TicketProps, index: number) => (
        <Ticket key={index} data={item} />
      ))}
    </ScrollView>
  ) : null
}
