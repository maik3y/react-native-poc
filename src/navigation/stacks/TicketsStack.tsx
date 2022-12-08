import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TicketScreen from '../../screens/TicketScreen'
import TicketsScreen from '../../screens/TicketsScreen'

export type TicketsStackParams = {
  Tickets: undefined
  Ticket: {
    id: number
  }
}

const TicketsStack = createNativeStackNavigator<TicketsStackParams>()

export default function TicketsScreenStack() {
  return (
    <TicketsStack.Navigator
      initialRouteName="Tickets"
      screenOptions={{
        headerShown: false
      }}>
      <TicketsStack.Screen name="Tickets" component={TicketsScreen} />
      <TicketsStack.Screen name="Ticket" component={TicketScreen} />
    </TicketsStack.Navigator>
  )
}
