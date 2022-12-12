import { styled } from 'nativewind'
import {
  View as DefaultView,
  Text as DefaultText,
  TextInput as DefaultTextInput,
  Pressable as DefaultPressable,
  ScrollView as DefaultScrollView
} from 'react-native'
import {
  FontAwesome as DefaultFontAwesome,
  MaterialCommunityIcons as DefaultMaterialCommunityIcons
} from '@expo/vector-icons'

export function useStyled() {
  const View = styled(DefaultView)
  const Text = styled(DefaultText)
  const TextInput = styled(DefaultTextInput)
  const Pressable = styled(DefaultPressable)
  const ScrollView = styled(DefaultScrollView)
  const FontAwesome = styled(DefaultFontAwesome)
  const MaterialCommunityIcons = styled(DefaultMaterialCommunityIcons)

  return {
    View,
    Text,
    TextInput,
    Pressable,
    ScrollView,
    FontAwesome,
    MaterialCommunityIcons
  }
}
