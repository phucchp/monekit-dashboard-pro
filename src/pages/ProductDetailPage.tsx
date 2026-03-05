import { useEffect } from 'react'
import { useAppDispatch } from '../app/hooks'
import ProductDetailsScreen from '../features/product-details/ProductDetailsScreen'
import { setPageTitle } from '../features/ui/uiSlice'

function ProductDetailPage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPageTitle('Product Detail'))
  }, [dispatch])

  return <ProductDetailsScreen />
}

export default ProductDetailPage
