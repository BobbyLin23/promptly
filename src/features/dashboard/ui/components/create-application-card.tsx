'use client'

import { Plus } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

export function CreateApplicationCard() {
  const router = useRouter()

  return (
    <Card
      className="cursor-pointer overflow-hidden border-dashed transition-all hover:shadow-sm"
      onClick={() => router.push('/dashboard/apps/new')}
    >
      <CardContent className="flex h-full flex-col items-center justify-center p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-dashed">
          <Plus className="h-6 w-6 text-muted-foreground" />
        </div>
        <p className="text-sm font-medium">Create application</p>
      </CardContent>
    </Card>
  )
}
