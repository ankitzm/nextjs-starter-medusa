import { ProductCollection } from "@medusajs/medusa"
import ProductPreview from "@modules/products/components/product-preview"
import { useCart } from "medusa-react"
import React from "react"
import { Product } from "types/medusa"
import FilterHeader from "../components/filter-header"

type CollectionTemplateProps = {
  collection: ProductCollection
  inititalProducts: Product[]
  count: number
  hasMore: boolean
}

const CollectionTemplate: React.FC<CollectionTemplateProps> = ({
  collection,
  inititalProducts,
  count,
  hasMore,
}) => {
  const { cart } = useCart()
  return (
    <div className="relative">
      <FilterHeader count={count} header={collection.title} />
      <div className="product-page-constraint grid grid-cols-2 lg:grid-cols-5 gap-x-2 lg:gap-x-4 py-6">
        {inititalProducts.map((p) => (
          <ProductPreview key={p.id} product={p} region={cart?.region} />
        ))}
      </div>
    </div>
  )
}

export default CollectionTemplate
