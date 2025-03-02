import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function PromptsOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Prompts Overview</CardTitle>
        <CardDescription>View and manage your created prompts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="py-6 text-center text-muted-foreground">
          No prompts yet. Please create a new prompt.
        </div>
        {/* Add prompt list component here */}
      </CardContent>
    </Card>
  )
}
