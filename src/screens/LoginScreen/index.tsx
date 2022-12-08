import { TouchableOpacity } from 'react-native'
import useAuth from '../../hooks/useAuth'
import { useStyled } from '../../hooks/useStyled'

export default function LoginScreen() {
  const { View, Text } = useStyled()
  const { isLoading, signIn } = useAuth()

  return (
    <View tw="flex-1 justify-center mt-24 items-center">
      {!isLoading ? (
        <TouchableOpacity onPress={signIn}>
          <Text tw="mt-3 text-xl font-bold text-blue-500 dark:text-white">
            Login
          </Text>
        </TouchableOpacity>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  )
}
