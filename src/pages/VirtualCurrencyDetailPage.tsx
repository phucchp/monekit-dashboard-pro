import { useEffect } from 'react'
import { useAppDispatch } from '../app/hooks'
import { setPageTitle } from '../features/ui/uiSlice'
import VirtualCurrencyDetailScreen from '../features/virtual-currency-detail/VirtualCurrencyDetailScreen'

function VirtualCurrencyDetailPage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPageTitle('Virtual Currency Detail'))
  }, [dispatch])

  return <VirtualCurrencyDetailScreen />
}

export default VirtualCurrencyDetailPage
