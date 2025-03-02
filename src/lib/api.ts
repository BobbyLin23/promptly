import { Application } from '@/db/schema'
import type { ApplicationFormValues } from '@/features/application/components/create-application-form'

// API endpoints
export const api = {
  applications: {
    getById: async (id: string): Promise<Application> => {
      const response = await fetch(`/api/applications/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        try {
          const error = await response.json()
          throw new Error(error.error || 'Failed to get application')
        } catch (jsonError) {
          const text = await response.text()
          console.error('Non-JSON response:', text)
          throw new Error(
            `API error (${response.status}): Invalid response format`,
          )
        }
      }

      return response.json()
    },

    create: async (data: ApplicationFormValues): Promise<Application> => {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        try {
          const error = await response.json()
          throw new Error(error.error || 'Failed to create project')
        } catch (jsonError) {
          const text = await response.text()
          console.error('Non-JSON response:', text)
          throw new Error(
            `API error (${response.status}): Invalid response format`,
          )
        }
      }

      return response.json()
    },
  },
}
