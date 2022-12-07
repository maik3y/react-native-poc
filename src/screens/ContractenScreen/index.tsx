import React from 'react'

import { ContractProps, useContracts } from './hooks/useContracts'
import { useStyled } from '../../hooks/useStyled'
import Contract from './components/Contract'

export default function ContractenScreen() {
  const { View, Text, ScrollView } = useStyled()
  const { isSuccess, data, error, isLoading, isFetching } = useContracts()

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
      {data.map((item: ContractProps, index: number) => (
        <Contract key={index} data={item} />
      ))}
    </ScrollView>
  ) : null
}
