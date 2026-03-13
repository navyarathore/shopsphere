import ProductCard from './ProductCard'
import type { Product } from '../../types'

interface ProductGridProps {
  products: Product[]
  loading: boolean
  error?: string | null
  emptyTitle?: string
  emptyMessage?: string
}

export default function ProductGrid({
  products,
  loading,
  error,
  emptyTitle = 'No products found',
  emptyMessage = 'Try adjusting your search or filter.',
}: ProductGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="card animate-pulse">
            <div className="bg-gray-200 h-48 rounded mb-3" />
            <div className="bg-gray-200 h-4 rounded mb-2" />
            <div className="bg-gray-200 h-4 rounded w-3/4 mb-4" />
            <div className="bg-gray-200 h-8 rounded" />
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-500">
        <p className="text-lg font-medium">Failed to load products</p>
        <p className="text-sm mt-1">{error}</p>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p className="text-lg font-medium">{emptyTitle}</p>
        <p className="text-sm mt-1">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
