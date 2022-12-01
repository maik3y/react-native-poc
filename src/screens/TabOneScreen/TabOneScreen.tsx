import { Text, View } from 'react-native'
import { styled } from 'nativewind'

const StyledView = styled(View)
const StyledText = styled(Text)

export default function TabOneScreen() {
  return (
    <StyledView tw="flex-1 flex-col items-center justify-center p-5 bg-green-600">
      <StyledText tw="text-white m-5 w-full font-bold text-lg text-center">
        Styled with tailwind CSS
      </StyledText>
    </StyledView>
  )
}
