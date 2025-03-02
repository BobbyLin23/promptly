import { currentUser } from '@clerk/nextjs/server'
import { notFound } from 'next/navigation'
import { eq } from 'drizzle-orm'

import type { ApplicationFormValues } from '../components/create-application-form'
import { api } from '@/lib/api'
import { db } from '@/db'
import { Application, applications } from '@/db/schema'

/**
 * Creates a new application via API
 */
export async function createApplication(
  values: ApplicationFormValues,
): Promise<Application> {
  return api.applications.create(values)
}

/**
 * Gets application details directly from the database (server-side)
 */
export async function getApplicationById(id: string): Promise<Application> {
  try {
    // Verify user authentication
    const user = await currentUser()
    if (!user) {
      throw new Error('Unauthorized access')
    }

    // Get application
    const application = await db
      .select()
      .from(applications)
      .where(eq(applications.id, id))
      .limit(1)

    if (!application.length) {
      return notFound()
    }

    // Check if user has access to this application
    if (application[0].userId !== user.id && !application[0].isPublic) {
      throw new Error('Unauthorized access')
    }

    return application[0]
  } catch (error) {
    console.error('Failed to get application:', error)
    throw error
  }
}
