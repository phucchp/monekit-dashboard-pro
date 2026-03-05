import { useEffect } from 'react'
import { useAppDispatch } from '../app/hooks'
import { setPageTitle } from '../features/ui/uiSlice'

const metrics = [
  { label: 'Revenue', value: '$128,420' },
  { label: 'Active Users', value: '2,431' },
  { label: 'Conversion', value: '5.8%' },
]

function DashboardPage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPageTitle('Dashboard'))
  }, [dispatch])

  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric) => (
        <article key={metric.label} className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-500">{metric.label}</p>
          <p className="mt-3 text-2xl font-semibold text-slate-900">{metric.value}</p>
        </article>
      ))}
    </section>
  )
}

export default DashboardPage
