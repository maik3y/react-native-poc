import React from 'react'
import { Text as DefaultText, View as DefaultView } from 'react-native'
import { styled } from 'nativewind'

import { ContractTableRow } from './ContractTableRow'
import { ContractProps } from '../hooks/useContracts'

export default function Contract({ data }: { data: ContractProps }) {
  const View = styled(DefaultView)
  const Text = styled(DefaultText)

  return (
    <View tw="flex w-full rounded-md border dark:border-white mb-2 overflow-hidden">
      <View tw="flex w-full p-2 bg-purple-600">
        <Text tw="text-white font-bold">Contract {data.id}</Text>
      </View>
      <ContractTableRow label="Naam" value={data.name} />
      <ContractTableRow label="Project" value={data.project} />
      <ContractTableRow label="Jouw referentie" value={data.referenceNumber} />
      <ContractTableRow label="Locatie" value={data.address} />
    </View>
  )
}
