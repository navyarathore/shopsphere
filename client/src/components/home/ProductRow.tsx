import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import type { Product } from '../../types'

/** Mini product card designed for a horizontal row. */
function MiniProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()

  return (
    <div className="flex-shrink-0 w-44 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex flex-col bg-white border border-gray-100">
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: '176px' }}>
        <Link to={`/product/${product.id}`} className="block h-full">
          <img
            src={product.main_image_url}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        </Link>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </div>

      {/* Info */}
      <div className="px-2.5 py-2.5 flex flex-col flex-1">
        <Link to={`/product/${product.id}`}>
          <p className="text-[11px] font-semibold text-gray-800 line-clamp-2 hover:text-orange-600 leading-snug">
            {product.name}
          </p>
        </Link>
        <div className="flex items-center justify-between mt-auto pt-2 gap-1">
          <span className="text-sm font-extrabold text-gray-900">${Number(product.price).toFixed(2)}</span>
          <button
            onClick={() => addToCart(product)}
            disabled={product.stock === 0}
            className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-amber-400 hover:bg-amber-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {product.stock === 0 ? 'Sold Out' : '+ Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}

/** Skeleton placeholder. */
function SkeletonCard() {
  return (
    <div className="flex-shrink-0 w-44 rounded-2xl overflow-hidden shadow-sm animate-pulse bg-white border border-gray-100">
      <div className="w-full bg-gray-200" style={{ height: '176px' }} />
      <div className="px-2.5 py-2.5">
        <div className="h-2.5 bg-gray-200 rounded mb-1.5 w-full" />
        <div className="h-2.5 bg-gray-200 rounded mb-3 w-3/4" />
        <div className="flex items-center justify-between">
          <div className="h-4 bg-gray-200 rounded w-1/3" />
          <div className="h-6 bg-gray-200 rounded-lg w-2/5" />
        </div>
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
    <section className="bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-4"
        style={{
          background: `linear-gradient(to right, ${accentBg}30 0%, transparent 70%)`,
          borderLeft: `4px solid ${accentBg}`,
        }}
      >
        <h2 className="text-base font-extrabold text-gray-900 tracking-tight">{title}</h2>
        <Link
          to={viewAllLink}
          className="flex items-center gap-1 text-xs font-bold text-[#007185] hover:text-orange-600 hover:underline"
        >
          See all
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
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
