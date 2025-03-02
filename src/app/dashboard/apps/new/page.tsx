import { CreateApplicationHeader } from '@/features/application/components/create-application-header'
import { CreateApplicationForm } from '@/features/application/components/create-application-form'

export default function NewAppPage() {
  return (
    <div className="container mx-auto max-w-4xl py-10">
      <CreateApplicationHeader />
      <CreateApplicationForm />
    </div>
  )
}
