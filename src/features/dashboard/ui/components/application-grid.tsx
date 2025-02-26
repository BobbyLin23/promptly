import { Application } from './application-card'
import { ApplicationCard } from './application-card'
import { CreateApplicationCard } from './create-application-card'

interface ApplicationGridProps {
  applications: Application[]
}

export function ApplicationGrid({ applications }: ApplicationGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div>
        <CreateApplicationCard />
      </div>
      {applications.map((application) => (
        <div key={application.id}>
          <ApplicationCard application={application} />
        </div>
      ))}
    </div>
  )
}
