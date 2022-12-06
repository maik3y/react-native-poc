import { styled } from 'nativewind'
import {
  View as DefaultView,
  Text as DefaultText,
  Pressable as DefaultPressable
} from 'react-native'

export function useStyled() {
  const View = styled(DefaultView)
  const Text = styled(DefaultText)
  const Pressable = styled(DefaultPressable)

  return { View, Text, Pressable }
}
