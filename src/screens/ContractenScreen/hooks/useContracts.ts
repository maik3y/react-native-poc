import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export interface ContractProps {
  id: number
  address: string
  name: string
  project: string
  referenceNumber: string
}

export function useContracts() {
  const getContracts = async () => {
    const { data } = await axios.get(
      'https://ku-poc-functions.azurewebsites.net/api/GetContractData'
    )
    return data as ContractProps[]
  }

  return useQuery({
    queryKey: ['contracts'],
    queryFn: getContracts
  })
}
