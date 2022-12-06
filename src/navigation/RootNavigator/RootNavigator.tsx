import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../types'
import LoginScreen from '../../screens/LoginScreen/LoginScreen'
import ModalScreen from '../../screens/ModalScreen/ModalScreen'
import BottomTabNavigator from '../BottomTabNavigator/BottomTabNavigator'

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootNavigator() {
  const user = true
  return !user ? (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
