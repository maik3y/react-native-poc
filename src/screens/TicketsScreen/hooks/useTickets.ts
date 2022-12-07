import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export interface TicketProps {
  id: number
  action: string
  actionDate: string
}

export function useTickets() {
  const getTickets = async () => {
    const { data } = await axios.get(
      'https://ku-poc-functions.azurewebsites.net/api/GetTicketData'
    )
    return data as TicketProps[]
  }

  return useQuery({
    queryKey: ['tickets'],
    queryFn: getTickets
  })
}
