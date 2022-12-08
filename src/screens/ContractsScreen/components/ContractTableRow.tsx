import { Text as DefaultText, View as DefaultView } from 'react-native'
import { styled } from 'nativewind'

interface ContractTableRowProps {
  label: string
  value: string
}

export const ContractTableRow = ({ label, value }: ContractTableRowProps) => {
  const View = styled(DefaultView)
  const Text = styled(DefaultText)

  return (
    <View tw="flex flex-row flex-wrap w-full box-border p-1">
      <View tw="flex w-1/3 p-0.5">
        <Text tw="dark:text-white">{label}</Text>
      </View>
      <View tw="flex w-2/3 p-0.5">
        <Text tw="dark:text-white">{value}</Text>
      </View>
    </View>
  )
}
