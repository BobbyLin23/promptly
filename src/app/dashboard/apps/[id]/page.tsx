export default async function AppIdPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return <div>AppPage {id}</div>
}
