import { ScrollView as DefaultScrollView } from 'react-native'
import { styled } from 'nativewind'
import React from 'react'

import ContractBlock from '../../components/ContractBlock/ContractBlock'

export default function ContractenScreen() {
  const ScrollView = styled(DefaultScrollView)

  const contractMock = {
    number: '177548',
    name: 'Van Wijnen materieel BV',
    reference: 'INH202220721',
    location: {
      street: 'Parkweg',
      city: 'Schiedam',
      number: '1-2'
    }
  }

  return (
    <ScrollView tw="p-4">
      <ContractBlock data={contractMock} />
      <ContractBlock data={contractMock} />
      <ContractBlock data={contractMock} />
      <ContractBlock data={contractMock} />
      <ContractBlock data={contractMock} />
      <ContractBlock data={contractMock} />
      <ContractBlock data={contractMock} />
      <ContractBlock data={contractMock} />
    </ScrollView>
  )
}
