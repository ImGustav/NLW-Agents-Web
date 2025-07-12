import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { CreateRoomRequest } from './types/create-room-request'
import type { CreateRoomResponse } from './types/create-roopm-response'

export function useCreateRoom() {
  const queryClient = useQueryClient()

  return useMutation({
    // Mutation e utilizado quando ha edicao, adicao ou remocao. E querry quando for listagem
    mutationFn: async (data: CreateRoomRequest) => {
      const response = await fetch('http://localhost:3333/room', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result: CreateRoomResponse = await response.json()

      return result
    },

    onSuccess: () => {
      // Essa funcao vai refazer todas as queries que tenham essa key
      queryClient.invalidateQueries({ queryKey: ['get-rooms'] })
    },
  })
}
