import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import type { Product } from '../types'

// ── Constants ─────────────────────────────────────────────────────────────────

const BESTSELLER_CATEGORIES: Array<{
  name: string
  icon: string
  accentFrom: string
  accentTo: string
  badgeColor: string
}> = [
  { name: 'Electronics',       icon: '💻', accentFrom: '#1a1a2e', accentTo: '#16213e', badgeColor: '#febd69' },
  { name: 'Mobiles',           icon: '📱', accentFrom: '#0f3460', accentTo: '#533483', badgeColor: '#a78bfa' },
  { name: 'Computers',         icon: '🖥️', accentFrom: '#134e4a', accentTo: '#065f46', badgeColor: '#6ee7b7' },
  { name: 'Books',             icon: '📚', accentFrom: '#7c2d12', accentTo: '#92400e', badgeColor: '#fcd34d' },
  { name: 'Clothing',          icon: '👗', accentFrom: '#4a044e', accentTo: '#702459', badgeColor: '#f9a8d4' },
  { name: 'Sports & Outdoors', icon: '🏃', accentFrom: '#064e3b', accentTo: '#065f46', badgeColor: '#34d399' },
  { name: 'Home & Kitchen',    icon: '🏠', accentFrom: '#431407', accentTo: '#7c2d12', badgeColor: '#fb923c' },
  { name: 'Toys & Games',      icon: '🧸', accentFrom: '#1e3a5f', accentTo: '#2d6a4f', badgeColor: '#93c5fd' },
  { name: 'Fresh',             icon: '🥦', accentFrom: '#14532d', accentTo: '#166534', badgeColor: '#86efac' },
]

// ── #1 hero product (large cinematic card) ───────────────────────────────────

interface HeroProductProps {
  product: Product
  accentFrom: string
  badgeColor: string
}

function HeroProduct({ product, accentFrom, badgeColor }: HeroProductProps) {
  const { addToCart } = useCart()
  const { isWishlisted, toggleWishlist } = useWishlist()
  const wishlisted = isWishlisted(product.id)

  return (
    <div className="relative rounded-xl overflow-hidden group shadow-md flex-1 min-h-0">
      {/* Full-bleed image */}
      <Link to={`/product/${product.id}`} className="block h-full">
        <img
          src={product.main_image_url}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          style={{ minHeight: '220px' }}
        />
      </Link>

      {/* Dark gradient overlay rising from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      {/* Rank ribbon — top-left */}
      <div
        className="absolute top-0 left-0 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest rounded-br-xl"
        style={{ background: accentFrom, color: badgeColor }}
      >
        #1 Best Seller
      </div>

      {/* Wishlist — top-right */}
      <button
        onClick={() => toggleWishlist(product)}
        className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full shadow hover:scale-110 transition-transform z-10"
        title={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transition-colors ${wishlisted ? 'text-red-500' : 'text-gray-400'}`}
          viewBox="0 0 24 24"
          fill={wishlisted ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth={wishlisted ? 0 : 1.8}
        >
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
        </svg>
      </button>

      {/* Info overlay — bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
        <Link to={`/product/${product.id}`}>
          <p className="text-white font-bold text-sm line-clamp-2 leading-snug hover:underline mb-1">
            {product.name}
          </p>
        </Link>
        <div className="flex items-center justify-between gap-2">
          <span className="text-white font-extrabold text-base">
            ₹{Number(product.price).toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product)}
            disabled={product.stock === 0}
            className="text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
            style={{ backgroundColor: badgeColor, color: '#1a1a1a' }}
          >
            {product.stock === 0 ? 'Out of Stock' : '+ Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}

// ── #2 / #3 compact side card ─────────────────────────────────────────────────

interface SideProductProps {
  product: Product
  rank: 2 | 3
  accentFrom: string
  badgeColor: string
}

function SideProduct({ product, rank, accentFrom, badgeColor }: SideProductProps) {
  const { addToCart } = useCart()
  const { isWishlisted, toggleWishlist } = useWishlist()
  const wishlisted = isWishlisted(product.id)
  const label = rank === 2 ? '#2 Popular' : '#3 Top Rated'

  return (
    <div className="relative rounded-xl overflow-hidden group shadow-sm flex-1 min-h-0">
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block h-full">
        <img
          src={product.main_image_url}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          style={{ minHeight: '100px' }}
        />
      </Link>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />

      {/* Rank tag — top-left */}
      <div
        className="absolute top-0 left-0 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider rounded-br-lg"
        style={{ background: accentFrom, color: badgeColor, opacity: 0.95 }}
      >
        {label}
      </div>

      {/* Wishlist — top-right */}
      <button
        onClick={() => toggleWishlist(product)}
        className="absolute top-1.5 right-1.5 p-1 bg-white/90 rounded-full shadow hover:scale-110 transition-transform z-10"
        title={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-3 w-3 transition-colors ${wishlisted ? 'text-red-500' : 'text-gray-400'}`}
          viewBox="0 0 24 24"
          fill={wishlisted ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth={wishlisted ? 0 : 1.8}
        >
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
        </svg>
      </button>

      {/* Info overlay — bottom */}
      <div className="absolute bottom-0 left-0 right-0 px-2.5 py-2 z-10">
        <Link to={`/product/${product.id}`}>
          <p className="text-white font-semibold text-[11px] line-clamp-1 leading-snug hover:underline">
            {product.name}
          </p>
        </Link>
        <div className="flex items-center justify-between gap-1 mt-1">
          <span className="text-white font-extrabold text-xs">
            ₹{Number(product.price).toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product)}
            disabled={product.stock === 0}
            className="text-[9px] font-bold px-2 py-1 rounded-md transition-colors disabled:opacity-40 whitespace-nowrap"
            style={{ backgroundColor: badgeColor, color: '#1a1a1a' }}
          >
            {product.stock === 0 ? 'Out of Stock' : '+ Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Skeleton ──────────────────────────────────────────────────────────────────

function SkeletonLayout() {
  return (
    <div className="flex gap-2 p-3" style={{ height: '260px' }}>
      <div className="flex-[3] bg-gray-200 rounded-xl animate-pulse" />
      <div className="flex-[2] flex flex-col gap-2">
        <div className="flex-1 bg-gray-200 rounded-xl animate-pulse" />
        <div className="flex-1 bg-gray-200 rounded-xl animate-pulse" />
      </div>
    </div>
  )
}

// ── Category card ─────────────────────────────────────────────────────────────

interface CategoryCardProps {
  name: string
  icon: string
  accentFrom: string
  accentTo: string
  badgeColor: string
}

function CategoryCard({ name, icon, accentFrom, accentTo, badgeColor }: CategoryCardProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api
      .get<Product[]>('/api/products', { params: { category: name } })
      .then((res) => setProducts(res.data.slice(0, 3)))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [name])

  if (!loading && products.length === 0) return null

  const [first, second, third] = products

  return (
    <div className="rounded-2xl overflow-hidden shadow-md flex flex-col">
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{ background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})` }}
      >
        <div className="flex items-center gap-2.5">
          <span className="text-2xl">{icon}</span>
          <div>
            <p className="text-[10px] text-white/50 font-semibold tracking-widest uppercase leading-none mb-0.5">Top 3 in</p>
            <h2 className="text-base font-extrabold text-white leading-tight">{name}</h2>
          </div>
        </div>
        <Link
          to={`/?category=${encodeURIComponent(name)}`}
          className="flex-shrink-0 text-[11px] font-bold px-3 py-1 rounded-full hover:opacity-80 transition-opacity"
          style={{ backgroundColor: badgeColor, color: '#1a1a1a' }}
        >
          See all →
        </Link>
      </div>

      {/* Product showcase */}
      {loading ? (
        <SkeletonLayout />
      ) : (
        <div className="bg-gray-50 p-2.5 flex gap-2" style={{ height: '260px' }}>
          {/* #1 — hero, takes 3/5 width */}
          {first && (
            <div className="flex-[3] flex flex-col">
              <HeroProduct product={first} accentFrom={accentFrom} badgeColor={badgeColor} />
            </div>
          )}
          {/* #2 and #3 — stacked, take 2/5 width */}
          {(second || third) && (
            <div className="flex-[2] flex flex-col gap-2">
              {second && (
                <SideProduct product={second} rank={2} accentFrom={accentFrom} badgeColor={badgeColor} />
              )}
              {third && (
                <SideProduct product={third} rank={3} accentFrom={accentFrom} badgeColor={badgeColor} />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ── Hero banner ───────────────────────────────────────────────────────────────

function BestsellerHero() {
  return (
    <div className="rounded-2xl overflow-hidden relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
      <div className="absolute -top-10 -left-10 w-44 h-44 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-yellow-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-5xl">🏆</span>
          <div>
            <p className="text-amber-400 text-xs font-bold tracking-widest uppercase">ShopSphere</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">Best Sellers</h1>
          </div>
        </div>
        <p className="text-white/70 text-sm max-w-md leading-relaxed">
          Discover the most loved products across every category — chosen by thousands of happy shoppers.
          Updated daily based on sales, ratings, and reviews.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {['Top Rated', 'Most Purchased', 'Highest Reviewed', 'Fan Favourites'].map((tag) => (
            <span key={tag} className="text-xs bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Podium decoration */}
      <div className="relative z-10 flex-shrink-0 hidden sm:flex items-end gap-1.5">
        {[
          { rank: '2', h: 'h-16', color: 'bg-gray-400/80' },
          { rank: '1', h: 'h-24', color: 'bg-amber-400/90' },
          { rank: '3', h: 'h-12', color: 'bg-amber-700/80' },
        ].map(({ rank, h, color }) => (
          <div key={rank} className={`w-10 ${h} ${color} rounded-t-md flex items-start justify-center pt-1`}>
            <span className="text-white text-xs font-extrabold">{rank}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function BestsellerPage() {
  return (
    <div className="max-w-[1500px] mx-auto px-3 sm:px-6 py-6 flex flex-col gap-6">
      <BestsellerHero />

      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-amber-200" />
        <span className="text-amber-600 font-bold text-sm tracking-wide uppercase">Top 3 picks by category</span>
        <div className="h-px flex-1 bg-amber-200" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {BESTSELLER_CATEGORIES.map((cat) => (
          <CategoryCard key={cat.name} {...cat} />
        ))}
      </div>
    </div>
  )
}
