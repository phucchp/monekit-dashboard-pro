import { useEffect } from 'react'
import { useAppDispatch } from '../app/hooks'
import OfferingCreateScreen from '../features/offering-create/OfferingCreateScreen'
import { setPageTitle } from '../features/ui/uiSlice'

function OfferingCreatePage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPageTitle('Create Offering'))
  }, [dispatch])

  return <OfferingCreateScreen />
}

export default OfferingCreatePage
