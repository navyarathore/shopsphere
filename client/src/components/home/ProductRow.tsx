import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import type { Product } from '../../types'

/** Mini product card designed for a horizontal row. */
function MiniProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()

  return (
    <div className="flex-shrink-0 w-44 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
      <Link to={`/product/${product.id}`} className="block">
        <img
          src={product.main_image_url}
          alt={product.name}
          className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </Link>
      <div className="p-2 flex flex-col flex-1">
        <Link to={`/product/${product.id}`}>
          <p className="text-xs text-gray-800 font-medium line-clamp-2 hover:text-amazon-orange leading-tight mb-1">
            {product.name}
          </p>
        </Link>
        <p className="text-base font-bold text-gray-900 mt-auto mb-2">
          ${Number(product.price).toFixed(2)}
        </p>
        <button
          onClick={() => addToCart(product)}
          disabled={product.stock === 0}
          className="w-full text-xs py-1.5 rounded font-semibold bg-amazon-yellow hover:bg-amazon-orange transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}

/** Skeleton placeholder. */
function SkeletonCard() {
  return (
    <div className="flex-shrink-0 w-44 bg-white rounded-md shadow-sm animate-pulse">
      <div className="w-full h-40 bg-gray-200" />
      <div className="p-2">
        <div className="h-3 bg-gray-200 rounded mb-2 w-full" />
        <div className="h-3 bg-gray-200 rounded mb-3 w-2/3" />
        <div className="h-7 bg-gray-200 rounded" />
      </div>
    </div>
  )
}

interface ProductRowProps {
  title: string
  viewAllLink: string
  products?: Product[]
  loading?: boolean
  accentBg?: string
}

/**
 * Horizontally-scrollable product row with a section header.
 *
 * Props:
 *   title        – section heading
 *   viewAllLink  – href for "See all" button
 *   products     – array of product objects
 *   loading      – show skeleton cards
 *   accentBg     – optional left accent colour bar (CSS colour string)
 */
export default function ProductRow({
  title,
  viewAllLink,
  products = [],
  loading = false,
  accentBg = '#febd69',
}: ProductRowProps) {
  return (
    <section className="bg-white rounded-md shadow-sm overflow-hidden">
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b border-gray-100"
        style={{ borderLeft: `4px solid ${accentBg}` }}
      >
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
        <Link
          to={viewAllLink}
          className="text-sm text-[#007185] hover:text-amazon-orange hover:underline font-medium"
        >
          See all offers →
        </Link>
      </div>

      {/* Scrollable row */}
      <div className="flex gap-3 overflow-x-auto px-4 py-4 scrollbar-hide">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
          : products.map((p) => <MiniProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}
