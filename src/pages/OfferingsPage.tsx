import { useEffect } from 'react'
import { useAppDispatch } from '../app/hooks'
import OfferingListScreen from '../features/offering-list/OfferingListScreen'
import { setPageTitle } from '../features/ui/uiSlice'

function OfferingsPage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPageTitle('Offerings'))
  }, [dispatch])

  return <OfferingListScreen />
}

export default OfferingsPage
