import ProductMainCards from './components/ProductMainCards'
import ProductSidePanel from './components/ProductSidePanel'
import ProductTopBar from './components/ProductTopBar'

function ProductDetailsScreen() {
  return (
    <section className="min-h-full">
      <ProductTopBar />

      <div className="w-full p-4 sm:p-6 lg:p-8">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
          <ProductMainCards />
          <ProductSidePanel />
        </div>
      </div>
    </section>
  )
}

export default ProductDetailsScreen
