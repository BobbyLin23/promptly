import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'

import * as schema from './schema'

// 创建数据库连接
const sql = neon(process.env.DATABASE_URL!)
export const db = drizzle(sql, { schema })
