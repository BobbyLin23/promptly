'use client'

import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { api, type ApplicationResponse } from '@/lib/api'
import type { ApplicationFormValues } from '../components/create-application-form'

export function useCreateApplication() {
  return useMutation({
    mutationFn: (data: ApplicationFormValues) => {
      return api.applications.create(data)
    },
    onSuccess: (data: ApplicationResponse) => {
      toast.success('Project created successfully!')
      return data
    },
    onError: (error: Error) => {
      console.error('Failed to create application:', error)
      toast.error(
        error.message || 'Failed to create project. Please try again.',
      )
      throw error
    },
  })
}
