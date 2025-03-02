'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { PromptsOverview } from '@/features/application/components/prompts-overview'
import { KnowledgeBase } from '@/features/application/components/knowledge-base'
import { useApplication } from '@/features/application/hooks/use-application'
import { Skeleton } from '@/components/ui/skeleton'

export function ApplicationDetailView({ id }: { id: string }) {
  const { data: application, isLoading, error } = useApplication(id)

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-8 w-1/3" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <Separator />
        <Skeleton className="h-[500px] w-full" />
      </div>
    )
  }

  if (error || !application) {
    return (
      <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-6 text-center">
        <h2 className="text-lg font-medium text-destructive">
          Error loading application
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {error?.message ||
            'Failed to load application details. Please try again.'}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          {application.name}
        </h1>
        <p className="text-muted-foreground">{application.description}</p>
      </div>

      <Separator />

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="background">Knowledge Base</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <PromptsOverview />
        </TabsContent>

        <TabsContent value="background" className="mt-6">
          <KnowledgeBase />
        </TabsContent>
      </Tabs>
    </div>
  )
}
