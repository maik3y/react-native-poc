import { useStyled } from '../../hooks/useStyled'

type Props = { title: string }

export default function PageTitle({ title }: Props) {
  const { Text } = useStyled()
  return <Text tw="px-4 text-3xl font-bold">{title}</Text>
}
