import { cache } from 'react'

import { QueryClient } from '@tanstack/react-query'

// 使用React的cache函数创建一个缓存的QueryClient实例
export const getQueryClient = cache(
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          // 默认不重试
          retry: false,
          // 默认5分钟过期
          staleTime: 1000 * 60 * 5,
          // 默认不重新获取
          refetchOnWindowFocus: false,
        },
      },
    }),
)
