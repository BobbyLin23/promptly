import { Suspense } from 'react'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'

import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@/components/ui/separator'
import { ApplicationDetailView } from '@/features/application/views/application-detail-view'
import { getApplicationById } from '@/features/application/services/application-service'
import { getQueryClient } from '@/lib/query-client'

export default async function AppIdPage({
  params,
}: {
  params: { id: string }
}) {
  // 创建一个新的QueryClient实例
  const queryClient = getQueryClient()

  // 预取应用详情数据
  await queryClient.prefetchQuery({
    queryKey: ['application', params.id],
    queryFn: async () => {
      const data = await getApplicationById(params.id)
      return data
    },
  })

  return (
    <div className="container mx-auto space-y-6 py-6">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense
          fallback={
            <div className="space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-8 w-1/3" />
                <Skeleton className="h-4 w-2/3" />
              </div>
              <Separator />
              <Skeleton className="h-[500px] w-full" />
            </div>
          }
        >
          <ApplicationDetailView id={params.id} />
        </Suspense>
      </HydrationBoundary>
    </div>
  )
}
