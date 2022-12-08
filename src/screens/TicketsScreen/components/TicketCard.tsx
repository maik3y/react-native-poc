import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useStyled } from '../../../hooks/useStyled'
import { TicketProps } from '../hooks/useTickets'

interface Props {
  data: TicketProps
  onPress: (id: number) => void
}

const TicketCard: React.FC<Props> = ({ data, onPress }) => {
  const { View, Text } = useStyled()
  return (
    <TouchableOpacity onPress={() => onPress(data.id)}>
      <View tw="flex flex-row h-14 mb-3 items-center border border-cyan-700 rounded-xl overflow-hidden">
        <View tw="flex flex-col w-1/4 h-full justify-center bg-cyan-700">
          <Text tw="text-center font-bold text-white text-md">{data.id}</Text>
        </View>
        <View tw="relative w-3/4 px-3">
          <Text tw="w-full mb-1 text-xs dark:text-white text-cyan-700">
            {data.action}
          </Text>
          <Text tw="w-full text-xs dark:text-white text-cyan-700">
            {data.actionDate}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default TicketCard
