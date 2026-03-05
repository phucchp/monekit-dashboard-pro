import { useEffect } from 'react'
import { useAppDispatch } from '../app/hooks'
import ProductListScreen from '../features/product-list/ProductListScreen'
import { setPageTitle } from '../features/ui/uiSlice'

function ProductListPage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPageTitle('Products'))
  }, [dispatch])

  return <ProductListScreen />
}

export default ProductListPage
