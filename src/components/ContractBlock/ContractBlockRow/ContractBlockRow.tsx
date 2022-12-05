import { Text as DefaultText, View as DefaultView } from 'react-native'
import { styled } from 'nativewind'

interface ContractBlockRowProps {
  label: string
  value: string
}

export const ContractBlockRow = ({ label, value }: ContractBlockRowProps) => {
  const View = styled(DefaultView)
  const Text = styled(DefaultText)

  return (
    <View tw="flex flex-row flex-wrap w-full box-border p-1">
      <View tw="flex w-1/3 p-0.5">
        <Text>{label}</Text>
      </View>
      <View tw="flex w-2/3 p-0.5">
        <Text>{value}</Text>
      </View>
    </View>
  )
}
