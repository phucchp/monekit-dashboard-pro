import { useEffect } from 'react'
import { useAppDispatch } from '../app/hooks'
import { setPageTitle } from '../features/ui/uiSlice'
import VirtualCurrencyListScreen from '../features/virtual-currency-list/VirtualCurrencyListScreen'

function VirtualCurrencyListPage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPageTitle('Virtual Currency'))
  }, [dispatch])

  return <VirtualCurrencyListScreen />
}

export default VirtualCurrencyListPage
