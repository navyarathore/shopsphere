import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import api from '../services/api'
import ProductGrid from '../components/product/ProductGrid'
import HeroBanner from '../components/home/HeroBanner'
import CategoryShowcase from '../components/home/CategoryShowcase'
import ProductRow from '../components/home/ProductRow'
import { AVAILABLE_CATEGORY_NAMES, CATEGORY_NAV_ITEMS } from '../constants/categories'
import BestsellerPage from './BestsellerPage'
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
    <div className={`rounded-2xl overflow-hidden relative ${bg} px-7 py-7 flex items-center justify-between gap-6 shadow-md`}>
      {/* Decorative blurred circle */}
      <div className="absolute right-24 top-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
      <div className="relative z-10">
        <p className="text-white font-extrabold text-xl sm:text-2xl leading-tight">{headline}</p>
        {sub && <p className="text-white/70 text-sm mt-1 max-w-md">{sub}</p>}
      </div>
      <Link
        to={ctaLink}
        className="relative z-10 flex-shrink-0 bg-amber-400 hover:bg-amber-300 text-gray-900 font-extrabold text-sm px-6 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg whitespace-nowrap"
      >
        {cta} →
      </Link>
    </div>
  )
}

// ── Category interest strip ──────────────────────────────────────────────────
function InterestStrip() {
  return (
    <div className="flex gap-2.5 overflow-x-auto scrollbar-hide pb-1">
      {CATEGORY_NAV_ITEMS.map((c) => (
        <Link
          key={c.query}
          to={`/?category=${encodeURIComponent(c.query)}`}
          className="flex-shrink-0 flex items-center gap-2.5 bg-white rounded-2xl shadow-sm border border-gray-100 px-4 py-2.5 hover:shadow-md hover:border-amber-300 hover:-translate-y-0.5 transition-all"
        >
          <span className="text-xl leading-none">{c.icon}</span>
          <span className="text-xs font-bold text-gray-700 whitespace-nowrap">{c.label}</span>
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
    const params: Record<string, string> = {}
    if (searchQuery) params.search = searchQuery
    if (categoryFilter && !showAllProducts) params.category = categoryFilter
    api.get('/api/products', { params })
      .then((res) => setFilteredProducts(res.data))
      .catch((err) => setFilterError(err.response?.data?.error || err.message))
      .finally(() => setFilterLoading(false))
  }, [searchQuery, categoryFilter, showAllProducts])

  // Group all products by category name
  const categoryMap = useMemo(() => {
    const map: Record<string, Product[]> = {}
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

  // ── Bestsellers ─────────────────────────────────────────────────────────
  if (categoryFilter === 'Bestsellers') {
    return <BestsellerPage />
  }

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
    <div className="bg-[#f0f2f5] min-h-screen">
      {/* Hero carousel */}
      <HeroBanner />

      <div className="max-w-[1500px] mx-auto px-3 sm:px-6 py-8 flex flex-col gap-10">

        {/* Scrollable category pill strip */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-extrabold text-gray-900 tracking-tight">Shop by Category</h2>
            <span className="text-[11px] text-gray-400 font-medium hidden sm:block">Scroll to explore →</span>
          </div>
          <InterestStrip />
        </section>

        {/* Mid-page promo banner */}
        <MidBanner
          bg="bg-gradient-to-r from-[#131921] to-[#232f3e]"
          headline="Deals you don't want to miss 🔥"
          sub="Limited-time offers across all categories — grab them before they're gone."
          cta="See all deals"
          ctaLink="/"
        />

        {/* Category showcase grid */}
        <section>
          <div className="flex items-end gap-3 mb-4">
            <div>
              <p className="text-[11px] font-bold text-amber-600 uppercase tracking-widest mb-0.5">Handpicked for you</p>
              <h2 className="text-xl font-extrabold text-gray-900 leading-tight">Explore Popular Collections</h2>
            </div>
            <div className="flex-1 h-px bg-gray-200 mb-1.5" />
          </div>
          <CategoryShowcase categoryMap={categoryMap} loading={loading} />
        </section>

        {/* Per-category product rows */}
        <section className="flex flex-col gap-6">
          <div className="flex items-end gap-3">
            <div>
              <p className="text-[11px] font-bold text-amber-600 uppercase tracking-widest mb-0.5">Browse by section</p>
              <h2 className="text-xl font-extrabold text-gray-900 leading-tight">Shop by Department</h2>
            </div>
            <div className="flex-1 h-px bg-gray-200 mb-1.5" />
          </div>
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
        </section>

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
