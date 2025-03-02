import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'
import { currentUser } from '@clerk/nextjs/server'

import { db } from '@/db'
import { applications } from '@/db/schema'
import { eq } from 'drizzle-orm'

// Define request body validation schema
const createApplicationSchema = z.object({
  name: z.string().min(2).max(255),
  description: z.string().optional(),
  isPublic: z.boolean().default(false),
})

// Create applications API router
const app = new Hono()

// Debug middleware
app.use('*', async (c, next) => {
  console.log(`[API] ${c.req.method} ${c.req.path}`)
  try {
    await next()
  } catch (error) {
    console.error('[API] Error:', error)
    return c.json({ error: 'Internal server error' }, 500)
  }
})

// Get application by ID endpoint
app.get('/:id', async (c) => {
  try {
    const id = c.req.param('id')
    console.log(`[API] Getting application with ID: ${id}`)

    // Verify user authentication
    const user = await currentUser()
    if (!user) {
      console.log('[API] Unauthorized access')
      return c.json({ error: 'Unauthorized access' }, 401)
    }

    // Get application
    const application = await db
      .select()
      .from(applications)
      .where(eq(applications.id, id))
      .limit(1)

    if (!application.length) {
      console.log(`[API] Application with ID ${id} not found`)
      return c.json({ error: 'Application not found' }, 404)
    }

    // Check if user has access to this application
    if (application[0].userId !== user.id && !application[0].isPublic) {
      console.log('[API] User does not have access to this application')
      return c.json({ error: 'Unauthorized access' }, 403)
    }

    console.log('[API] Application found:', application[0])
    return c.json(application[0])
  } catch (error) {
    console.error('[API] Failed to get application:', error)
    return c.json({ error: 'Failed to get application' }, 500)
  }
})

// Create application endpoint
app.post('/', zValidator('json', createApplicationSchema), async (c) => {
  try {
    console.log('[API] Creating application...')

    // Verify user authentication
    const user = await currentUser()
    if (!user) {
      console.log('[API] Unauthorized access')
      return c.json({ error: 'Unauthorized access' }, 401)
    }

    // Get validated data
    const data = c.req.valid('json')
    console.log('[API] Validated data:', data)

    // Create application
    const newApplication = await db
      .insert(applications)
      .values({
        name: data.name,
        description: data.description || null,
        isPublic: data.isPublic,
        userId: user.id,
      })
      .returning()

    console.log('[API] Application created:', newApplication[0])
    return c.json(newApplication[0], 201)
  } catch (error) {
    console.error('[API] Failed to create application:', error)

    return c.json({ error: 'Failed to create application' }, 500)
  }
})

export default app
