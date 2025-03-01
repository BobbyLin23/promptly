import { ApplicationCard } from '@/features/dashboard/components/application-card'
import { CreateApplicationCard } from '@/features/dashboard/components/create-application-card'
import { Header } from '@/features/dashboard/components/header'
import { mockApplications } from '@/lib/mock-data'

export default function DashboardPage() {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold">Applications</h1>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <CreateApplicationCard />
          {mockApplications.map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))}
        </div>
      </div>
    </div>
  )
}
