import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import api from '../services/api'
import ProductGrid from '../components/product/ProductGrid'
import FilterSortPanel, { DEFAULT_FILTERS, type FilterState } from '../components/product/FilterSortPanel'
import HeroBanner from '../components/home/HeroBanner'
import CategoryShowcase from '../components/home/CategoryShowcase'
import ProductRow from '../components/home/ProductRow'
import { AVAILABLE_CATEGORY_NAMES, CATEGORY_NAV_ITEMS } from '../constants/categories'
import BestsellerPage from './BestsellerPage'
import CustomerServicePage from './CustomerServicePage'
import GiftCardsPage from './GiftCardsPage'
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

  // Sort & filter panel state
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Reset panel filters whenever the search/category query changes
  useEffect(() => {
    setFilters(DEFAULT_FILTERS)
    setSidebarOpen(false)
  }, [searchQuery, categoryFilter])

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

  // Apply sort + filters to the raw listing products
  const processedProducts = useMemo(() => {
    const raw = showAllProducts ? allProducts : filteredProducts

    // 1. filter – price range
    let out = raw.filter((p) => {
      const price = Number(p.price)
      switch (filters.priceRange) {
        case 'under_500':   return price < 500
        case '500_1000':    return price >= 500 && price <= 1000
        case '1000_2000':   return price > 1000 && price <= 2000
        case '2000_3000':   return price > 2000 && price <= 3000
        case 'over_3000':   return price > 3000
        default:            return true
      }
    })

    // 2. filter – minimum rating
    if (filters.minRating > 0) {
      out = out.filter((p) => p.avg_rating !== null && p.avg_rating >= filters.minRating)
    }

    // 3. filter – in-stock only
    if (filters.inStockOnly) {
      out = out.filter((p) => p.stock > 0)
    }

    // 4. sort
    switch (filters.sort) {
      case 'price_asc':
        out = [...out].sort((a, b) => Number(a.price) - Number(b.price))
        break
      case 'price_desc':
        out = [...out].sort((a, b) => Number(b.price) - Number(a.price))
        break
      case 'rating_desc':
        out = [...out].sort((a, b) => (b.avg_rating ?? 0) - (a.avg_rating ?? 0))
        break
      case 'name_asc':
        out = [...out].sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        break  // 'featured' = original server order
    }

    return out
  }, [showAllProducts, allProducts, filteredProducts, filters])

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

  // ── Customer Service ────────────────────────────────────────────────────
  if (categoryFilter === 'Customer Service') {
    return <CustomerServicePage />
  }

  // ── Gift Cards ───────────────────────────────────────────────────────────
  if (categoryFilter === 'Gift Cards') {
    return <GiftCardsPage />
  }

  // ── Search / filter mode ─────────────────────────────────────────────────
  if (searchQuery || categoryFilter) {
    const gridLoading = showAllProducts ? loading : filterLoading

    return (
      <div className="max-w-[1500px] mx-auto px-3 sm:px-6 py-6">
        {/* Breadcrumb / query bar */}
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

          {/* Mobile sidebar toggle */}
          <button
            onClick={() => setSidebarOpen((o) => !o)}
            className="ml-auto flex items-center gap-1.5 lg:hidden text-sm font-semibold border border-gray-300 rounded-full px-3 py-1 hover:border-amazon-orange hover:text-amazon-orange transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M7 8h10M10 12h4" />
            </svg>
            {sidebarOpen ? 'Hide Filters' : 'Filters & Sort'}
          </button>
        </div>

        <div className="flex gap-6 items-start">
          {/* ── Sidebar ─────────────────────────────────────────────────── */}
          <div className={`flex-shrink-0 w-56 ${sidebarOpen ? 'block' : 'hidden'} lg:block`}>
            <FilterSortPanel
              filters={filters}
              onChange={setFilters}
              totalCount={processedProducts.length}
            />
          </div>

          {/* ── Product grid ─────────────────────────────────────────────── */}
          <div className="flex-1 min-w-0">
            {/* Active filter chips */}
            {(filters.priceRange || filters.minRating > 0 || filters.inStockOnly) && (
              <div className="flex flex-wrap gap-2 mb-3">
                {filters.priceRange && (
                  <span className="inline-flex items-center gap-1 text-xs bg-amber-100 text-amber-800 font-medium px-2.5 py-1 rounded-full">
                    {{
                      under_500: 'Under ₹500',
                      '500_1000': '₹500–₹1,000',
                      '1000_2000': '₹1,000–₹2,000',
                      '2000_3000': '₹2,000–₹3,000',
                      over_3000: 'Over ₹3,000',
                    }[filters.priceRange]}
                    <button onClick={() => setFilters((f) => ({ ...f, priceRange: '' }))} className="ml-0.5 hover:text-amber-600">✕</button>
                  </span>
                )}
                {filters.minRating > 0 && (
                  <span className="inline-flex items-center gap-1 text-xs bg-amber-100 text-amber-800 font-medium px-2.5 py-1 rounded-full">
                    {filters.minRating}★ & up
                    <button onClick={() => setFilters((f) => ({ ...f, minRating: 0 }))} className="ml-0.5 hover:text-amber-600">✕</button>
                  </span>
                )}
                {filters.inStockOnly && (
                  <span className="inline-flex items-center gap-1 text-xs bg-amber-100 text-amber-800 font-medium px-2.5 py-1 rounded-full">
                    In Stock Only
                    <button onClick={() => setFilters((f) => ({ ...f, inStockOnly: false }))} className="ml-0.5 hover:text-amber-600">✕</button>
                  </span>
                )}
              </div>
            )}

            <ProductGrid
              products={processedProducts}
              loading={gridLoading}
              error={filterError}
              emptyTitle={isUnavailableCategory ? 'No products available' : 'No products found'}
              emptyMessage={isUnavailableCategory
                ? `We don't have any products in ${categoryFilter} yet.`
                : 'Try adjusting your search or filter.'}
            />
          </div>
        </div>
      </div>
    )
  }

  // ── Home page ────────────────────────────────────────────────────────────
  return (
    <div className="bg-[#f0f2f5] min-h-screen">
      {/* Hero carousel */}
      <HeroBanner />

      <div className="max-w-[1500px] mx-auto px-3 sm:px-6 py-8 flex flex-col gap-10">

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
