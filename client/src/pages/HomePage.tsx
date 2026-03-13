import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import api from '../services/api'
import ProductGrid from '../components/product/ProductGrid'
import HeroBanner from '../components/home/HeroBanner'
import CategoryShowcase from '../components/home/CategoryShowcase'
import ProductRow from '../components/home/ProductRow'
import { AVAILABLE_CATEGORY_NAMES, CATEGORY_NAV_ITEMS } from '../constants/categories'
import type { Product } from '../types'

interface MidBannerProps {
  bg: string
  headline: string
  sub?: string
  cta: string
  ctaLink: string
}

// ── Inline mini-banner between sections ─────────────────────────────────────
function MidBanner({ bg, headline, sub, cta, ctaLink }: MidBannerProps) {
  return (
    <div className={`rounded-md overflow-hidden ${bg} px-6 py-5 flex items-center justify-between gap-4`}>
      <div>
        <p className="text-white font-extrabold text-lg sm:text-xl leading-tight">{headline}</p>
        {sub && <p className="text-white/75 text-sm mt-0.5">{sub}</p>}
      </div>
      <Link
        to={ctaLink}
        className="flex-shrink-0 bg-amazon-yellow hover:bg-amazon-orange text-gray-900 font-bold text-sm px-5 py-2 rounded-full transition-colors"
      >
        {cta}
      </Link>
    </div>
  )
}

// ── Category interest strip ──────────────────────────────────────────────────
function InterestStrip() {
  return (
    <div className="flex flex-wrap justify-center gap-3 py-1">
      {CATEGORY_NAV_ITEMS.map((c) => (
        <Link
          key={c.query}
          to={`/?category=${encodeURIComponent(c.query)}`}
          className="flex-shrink-0 flex flex-col items-center gap-1 bg-white rounded-xl shadow-sm px-5 py-3 hover:shadow-md hover:ring-2 hover:ring-amazon-yellow transition-all text-center"
        >
          <span className="text-2xl">{c.icon}</span>
          <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">{c.label}</span>
        </Link>
      ))}
    </div>
  )
}

// ── Main component ───────────────────────────────────────────────────────────
export default function HomePage() {
  const [searchParams, setSearch] = useSearchParams()
  const searchQuery = searchParams.get('search') || ''
  const categoryFilter = searchParams.get('category') || ''
  const showAllProducts = categoryFilter === 'All'

  const [allProducts, setAllProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Search / category filter mode – fetch only matching products
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [filterLoading, setFilterLoading] = useState(false)
  const [filterError, setFilterError] = useState<string | null>(null)

  // Fetch ALL products once on mount (for category sections)
  useEffect(() => {
    api.get('/api/products')
      .then((res) => setAllProducts(res.data))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  // Fetch filtered products whenever search/category changes
  useEffect(() => {
    if (!searchQuery && (!categoryFilter || showAllProducts)) return
    setFilterLoading(true)
    setFilterError(null)
    const params = {}
    if (searchQuery) params.search = searchQuery
    if (categoryFilter && !showAllProducts) params.category = categoryFilter
    api.get('/api/products', { params })
      .then((res) => setFilteredProducts(res.data))
      .catch((err) => setFilterError(err.response?.data?.error || err.message))
      .finally(() => setFilterLoading(false))
  }, [searchQuery, categoryFilter, showAllProducts])

  // Group all products by category name
  const categoryMap = useMemo(() => {
    const map = {}
    allProducts.forEach((p) => {
      const key = p.category_name || 'Other'
      if (!map[key]) map[key] = []
      map[key].push(p)
    })
    return map
  }, [allProducts])

  const categoryNames = useMemo(() => Object.keys(categoryMap), [categoryMap])
  const isUnavailableCategory = useMemo(
    () => Boolean(categoryFilter) && categoryFilter !== 'All' && !AVAILABLE_CATEGORY_NAMES.includes(categoryFilter),
    [categoryFilter],
  )

  // Row accent colours cycling
  const ACCENTS = ['#febd69', '#4286f4', '#38ef7d', '#a044ff', '#f66']

  // ── Search / filter mode ─────────────────────────────────────────────────
  if (searchQuery || categoryFilter) {
    const gridProducts = showAllProducts ? allProducts : filteredProducts
    const gridLoading = showAllProducts ? loading : filterLoading

    return (
      <div className="max-w-[1500px] mx-auto px-3 sm:px-6 py-6">
        <div className="mb-4 flex items-center gap-3 flex-wrap">
          {searchQuery && (
            <span className="text-gray-700 text-sm">
              Results for <strong className="text-gray-900">"{searchQuery}"</strong>
            </span>
          )}
          {categoryFilter && (
            <span className="text-xs bg-amazon-yellow px-2 py-0.5 rounded-full font-semibold">
              {categoryFilter}
            </span>
          )}
          <button
            onClick={() => setSearch({})}
            className="text-xs text-[#007185] hover:text-amazon-orange hover:underline"
          >
            ✕ Clear filters
          </button>
        </div>
        <ProductGrid
          products={gridProducts}
          loading={gridLoading}
          error={filterError}
          emptyTitle={isUnavailableCategory ? 'No products available' : 'No products found'}
          emptyMessage={isUnavailableCategory
            ? `We don't have any products in ${categoryFilter} yet.`
            : 'Try adjusting your search or filter.'}
        />
      </div>
    )
  }

  // ── Home page ────────────────────────────────────────────────────────────
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero carousel */}
      <HeroBanner />

      <div className="max-w-[1500px] mx-auto px-3 sm:px-6 py-6 flex flex-col gap-8">

        {/* Interest / category quick-links strip */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">Shop by Category</h2>
          <InterestStrip />
        </section>

        {/* 8-card category showcase */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">Explore Popular Collections</h2>
          <CategoryShowcase categoryMap={categoryMap} loading={loading} />
        </section>

        {/* Mid-page promo banner */}
        <MidBanner
          bg="bg-gradient-to-r from-[#131921] to-[#232f3e]"
          headline="Deals you don't want to miss 🔥"
          sub="Limited-time offers across all categories — grab them before they're gone."
          cta="See all deals"
          ctaLink="/"
        />

        {/* Per-category product rows */}
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <ProductRow key={i} title="" loading={true} products={[]} viewAllLink="/" />
            ))
          : categoryNames.map((name, i) => (
              <ProductRow
                key={name}
                title={name}
                viewAllLink={`/?category=${encodeURIComponent(name)}`}
                products={categoryMap[name]}
                accentBg={ACCENTS[i % ACCENTS.length]}
              />
            ))}

        {/* Bottom promo banner */}
        <MidBanner
          bg="bg-gradient-to-r from-[#6a3093] to-[#a044ff]"
          headline="New arrivals every week ✨"
          sub="Stay ahead of the curve — fresh products added regularly."
          cta="What's new"
          ctaLink="/"
        />

      </div>
    </div>
  )
}
