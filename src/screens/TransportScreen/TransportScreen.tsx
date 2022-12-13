import React from 'react'
import { SafeAreaView } from 'react-native'

import PageTitle from '../../components/PageTitle/PageTitle'
import { useStyled } from '../../hooks/useStyled'
import TransportForm from './components/TransportForm/TransportForm'

export default function TransportScreen() {
  const { View } = useStyled()

  return (
    <SafeAreaView>
      <View tw="flex flex-start">
        <PageTitle title="Transport" />
        <TransportForm />
      </View>
    </SafeAreaView>
  )
}
