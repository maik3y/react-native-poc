import React from 'react'

import { ContractProps, useContracts } from './hooks/useContracts'
import { useStyled } from '../../hooks/useStyled'
import ContractCard from './components/ContractCard'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ContractsStackParams } from '../../navigation/stacks/ContractenStack'

type Props = NativeStackScreenProps<ContractsStackParams, 'Contracts'>

export default function ContractsScreen({ navigation }: Props) {
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
        <ContractCard
          key={index}
          data={item}
          onPressCallback={(data: ContractProps) => {
            navigation.navigate('Contract', { data })
          }}
        />
      ))}
    </ScrollView>
  ) : null
}
