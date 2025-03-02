import { useQuery } from '@tanstack/react-query'

import { api } from '@/lib/api'

export function useApplication(id: string) {
  return useQuery({
    queryKey: ['application', id],
    queryFn: () => api.applications.getById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
  })
}
