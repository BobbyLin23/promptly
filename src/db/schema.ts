import {
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
  boolean,
} from 'drizzle-orm/pg-core'

import { createInsertSchema } from 'drizzle-zod'

// 应用表 - 用户创建的应用
export const applications = pgTable('applications', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  userId: varchar('user_id', { length: 255 }).notNull(),
  isPublic: boolean('is_public').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
})

export type Application = typeof applications.$inferSelect
export type CreateApplication = typeof applications.$inferInsert

export const createApplicationSchema = createInsertSchema(applications)

export const prompts = pgTable('prompts', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  content: text('content').notNull(),
  userId: varchar('user_id', { length: 255 }).notNull(),
  applicationId: uuid('application_id').references(() => applications.id),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
})
