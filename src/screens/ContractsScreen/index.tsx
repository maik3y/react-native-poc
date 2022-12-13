import React from 'react'

import { ContractProps, useContracts } from './hooks/useContracts'
import { useStyled } from '../../hooks/useStyled'
import ContractCard from './components/ContractCard'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ContractsStackParams } from '../../router/stacks/ContractenStack'
import { SafeAreaView } from 'react-native'
import PageTitle from '../../components/PageTitle/PageTitle'

type Props = NativeStackScreenProps<ContractsStackParams, 'Contracts'>

export default function ContractsScreen({ navigation }: Props) {
  const { View, Text, ScrollView } = useStyled()
  const { data, error, isFetching, isSuccess, isLoading } = useContracts()

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
    <SafeAreaView>
      <PageTitle title="Contracten" />
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
    </SafeAreaView>
  ) : null
}
