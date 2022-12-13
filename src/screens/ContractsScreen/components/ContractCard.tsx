import React from 'react'
import { TouchableOpacity } from 'react-native'

import { ContractTableRow } from './ContractTableRow'
import { ContractProps } from '../hooks/useContracts'
import { useStyled } from '../../../hooks/useStyled'

interface Props {
  data: ContractProps
  onPressCallback: (data: ContractProps) => void
}

const ContractCard: React.FC<Props> = ({ data, onPressCallback }) => {
  const { Text, View } = useStyled()

  return (
    <TouchableOpacity onPress={() => onPressCallback(data)}>
      <View tw="flex w-full rounded-md border dark:border-white mb-2 overflow-hidden">
        <View tw="flex w-full p-2 bg-purple-600">
          <Text tw="text-white font-bold">Contract {data.id}</Text>
        </View>
        <ContractTableRow label="Naam" value={data.name} />
        <ContractTableRow label="Project" value={data.project} />
        <ContractTableRow
          label="Jouw referentie"
          value={data.referenceNumber}
        />
        <ContractTableRow label="Locatie" value={data.address} />
      </View>
    </TouchableOpacity>
  )
}

export default ContractCard
