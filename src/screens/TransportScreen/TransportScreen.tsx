import PageTitle from '../../components/PageTitle/PageTitle'
import { useStyled } from '../../hooks/useStyled'

export default function TransportScreen() {
  const { View } = useStyled()

  return (
    <View tw="flex-1 flex-start">
      <PageTitle title="Transport" />
    </View>
  )
}
