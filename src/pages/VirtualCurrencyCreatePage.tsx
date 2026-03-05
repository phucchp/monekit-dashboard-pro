import { useEffect } from 'react'
import { useAppDispatch } from '../app/hooks'
import { setPageTitle } from '../features/ui/uiSlice'
import VirtualCurrencyCreateScreen from '../features/virtual-currency-create/VirtualCurrencyCreateScreen'

function VirtualCurrencyCreatePage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPageTitle('Create Virtual Currency'))
  }, [dispatch])

  return <VirtualCurrencyCreateScreen />
}

export default VirtualCurrencyCreatePage
