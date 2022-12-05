import React from 'react'
import { Text as DefaultText, View as DefaultView } from 'react-native'
import { styled } from 'nativewind'

import { ContractBlockRow } from './ContractBlockRow/ContractBlockRow'

interface ContractBlockProps {
  number: string
  name: string
  reference: string
  location: {
    street: string
    city: string
    number: string
  }
}

export default function ContractBlock({ data }: { data: ContractBlockProps }) {
  const View = styled(DefaultView)
  const Text = styled(DefaultText)

  return (
    <View tw="flex w-full rounded-md border dark:border-white mb-2 overflow-hidden">
      <View tw="flex w-full bg-blue p-2 bg-purple-600">
        <Text tw="text-white font-bold">Contract {data.number}</Text>
      </View>
      <ContractBlockRow label={'naam'} value={data.name} />
      <ContractBlockRow
        label={'project'}
        value={`${data.location.street} | ${data.location.city}`}
      />
      <ContractBlockRow label={'Jouw referentie'} value={data.reference} />
      <ContractBlockRow
        label={'Locatie'}
        value={`${data.location.street} ${data.location.number}, ${data.location.city}`}
      />
    </View>
  )
}
