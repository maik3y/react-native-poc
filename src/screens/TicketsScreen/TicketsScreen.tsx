import { Text, View } from 'react-native'
import { styled } from 'nativewind'

export default function TicketsScreen() {
  const StyledView = styled(View)
  const StyledText = styled(Text)

  return (
    <StyledView tw="flex-1 flex-col m-8 items-center justify-center p-5 bg-green-600 rounded-3xl">
      <StyledText tw="text-white m-5 w-full font-bold text-lg text-center">
        Styled with tailwind CSS
      </StyledText>
    </StyledView>
  )
}
