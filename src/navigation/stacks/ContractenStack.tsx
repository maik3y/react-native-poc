import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ContractenScreen from '../../screens/ContractenScreen'

export type ContractenStackParams = {
  Contracten: undefined
}

const ContractenStack = createNativeStackNavigator<ContractenStackParams>()

export default function ContractenScreenStack() {
  return (
    <ContractenStack.Navigator
      initialRouteName="Contracten"
      screenOptions={{
        headerShown: false
      }}>
      <ContractenStack.Screen name="Contracten" component={ContractenScreen} />
    </ContractenStack.Navigator>
  )
}
