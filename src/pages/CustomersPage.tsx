import { useEffect } from 'react'
import { useAppDispatch } from '../app/hooks'
import CustomerFilters from '../features/customers/components/CustomerFilters'
import CustomerMetrics from '../features/customers/components/CustomerMetrics'
import CustomersHeader from '../features/customers/components/CustomersHeader'
import CustomersTable from '../features/customers/components/CustomersTable'
import CustomersTopBar from '../features/customers/components/CustomersTopBar'
import { setPageTitle } from '../features/ui/uiSlice'

function CustomersPage() {
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

export default CustomersPage
