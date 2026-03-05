import { useEffect } from 'react'
import { useAppDispatch } from '../app/hooks'
import OfferingDetailScreen from '../features/offering-detail/OfferingDetailScreen'
import { setPageTitle } from '../features/ui/uiSlice'

function OfferingDetailPage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPageTitle('Offering Detail'))
  }, [dispatch])

  return <OfferingDetailScreen />
}

export default OfferingDetailPage
