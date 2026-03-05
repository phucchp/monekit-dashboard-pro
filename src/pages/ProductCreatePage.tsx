import { useEffect } from 'react'
import { useAppDispatch } from '../app/hooks'
import ProductCreateScreen from '../features/product-create/ProductCreateScreen'
import { setPageTitle } from '../features/ui/uiSlice'

function ProductCreatePage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPageTitle('Create Product'))
  }, [dispatch])

  return <ProductCreateScreen />
}

export default ProductCreatePage
