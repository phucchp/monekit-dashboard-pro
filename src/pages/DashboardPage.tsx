import { useEffect } from 'react'
import { useAppDispatch } from '../app/hooks'
import CustomersTopBar from '../features/customers/components/CustomersTopBar'
import CustomersHeader from '../features/customers/components/CustomersHeader'
import CustomerFilters from '../features/customers/components/CustomerFilters'
import CustomersTable from '../features/customers/components/CustomersTable'
import CustomerMetrics from '../features/customers/components/CustomerMetrics'
import { setPageTitle } from '../features/ui/uiSlice'

function DashboardPage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPageTitle('Customers'))
  }, [dispatch])

  return (
    <section className="min-h-full">
      <CustomersTopBar />

      <div className="w-full p-4 sm:p-6 lg:p-8">
        <CustomersHeader />
        <CustomerFilters />
        <CustomersTable />
        <CustomerMetrics />
      </div>
    </section>
  )
}

export default DashboardPage
