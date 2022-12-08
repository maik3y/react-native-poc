import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ContractScreen from '../../screens/ContractScreen'
import ContractsScreen from '../../screens/ContractsScreen'
import { ContractProps } from '../../screens/ContractsScreen/hooks/useContracts'

export type ContractsStackParams = {
  Contracts: undefined
  Contract: {
    data: ContractProps
  }
}

const ContractsStack = createNativeStackNavigator<ContractsStackParams>()

export default function ContractsScreenStack() {
  return (
    <ContractsStack.Navigator
      initialRouteName="Contracts"
      screenOptions={{
        headerShown: false
      }}>
      <ContractsStack.Screen name="Contracts" component={ContractsScreen} />
      <ContractsStack.Screen name="Contract" component={ContractScreen} />
    </ContractsStack.Navigator>
  )
}
