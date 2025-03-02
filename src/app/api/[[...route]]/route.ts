import { Hono } from 'hono'
import { handle } from 'hono/vercel'

import applications from '@/features/application/apis'

export const runtime = 'edge'

// 创建Hono应用实例，不设置basePath
const app = new Hono()

// 添加调试中间件
app.use('*', async (c, next) => {
  await next()
})

// 注册应用程序路由
app.route('/api/applications', applications)

// 导出处理函数
export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
export const DELETE = handle(app)
