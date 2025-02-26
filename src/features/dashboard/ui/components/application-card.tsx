import { Clock } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export interface Application {
  id: string
  name: string
  clerkId: string
  plan: 'Free Plan'
  updatedAt: string
  hasProductionEnvironment: boolean
}

interface ApplicationCardProps {
  application: Application
}

export function ApplicationCard({ application }: ApplicationCardProps) {
  return (
    <Card className="cursor-pointer overflow-hidden transition-all hover:shadow-sm">
      <CardContent className="p-0">
        <div className="border-b border-border/50 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                <span className="text-xs text-gray-600">
                  {application.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-medium">{application.name}</h3>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <p className="text-sm text-muted-foreground">{application.plan}</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="flex items-center gap-1 text-xs font-normal"
            >
              <span className="h-2 w-2 rounded-full bg-gray-400"></span>
              <span>No Production Environment</span>
            </Badge>
          </div>
          <div className="mt-4 flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>Updated {application.updatedAt}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
