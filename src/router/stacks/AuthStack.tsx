import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../../screens/LoginScreen'

export type AuthStackParams = {
  Login: undefined
}

const AuthStack = createNativeStackNavigator<AuthStackParams>()

export default function AuthScreenStack() {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false
      }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
  )
}
