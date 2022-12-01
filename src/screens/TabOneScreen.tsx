import { Text, View } from 'react-native'
import { styled } from 'nativewind'

const StyledView = styled(View)
const StyledText = styled(Text)

export default function TabOneScreen() {
  return (
    <StyledView tw="flex-1 items-center justify-center bg-white">
      <StyledText tw="flex-1 p-8 text-white m-5 bg-blue-700">
        styled with tailwindCSS
      </StyledText>
    </StyledView>
  )
}
