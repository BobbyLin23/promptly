import {
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
  boolean,
} from 'drizzle-orm/pg-core'

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
