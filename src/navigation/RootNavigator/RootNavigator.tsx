import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../types'
import ModalScreen from '../../screens/ModalScreen/ModalScreen'
import BottomTabNavigator from '../BottomTabNavigator/BottomTabNavigator'

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const RootStack = createNativeStackNavigator<RootStackParamList>()

export default function RootNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Group screenOptions={{ presentation: 'modal' }}>
        <RootStack.Screen name="Modal" component={ModalScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  )
}
