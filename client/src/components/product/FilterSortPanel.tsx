import { useState } from 'react'

// ── Types ─────────────────────────────────────────────────────────────────────

export type SortOption =
  | 'featured'
  | 'price_asc'
  | 'price_desc'
  | 'rating_desc'
  | 'name_asc'

export type PriceRange =
  | ''
  | 'under_500'
  | '500_1000'
  | '1000_2000'
  | '2000_3000'
  | 'over_3000'

export type MinRating = 0 | 3 | 4

export interface FilterState {
  sort: SortOption
  priceRange: PriceRange
  minRating: MinRating
  inStockOnly: boolean
}

export const DEFAULT_FILTERS: FilterState = {
  sort: 'featured',
  priceRange: '',
  minRating: 0,
  inStockOnly: false,
}

interface Props {
  filters: FilterState
  onChange: (f: FilterState) => void
  totalCount: number
}

// ── Star icon ─────────────────────────────────────────────────────────────────
function Stars({ filled }: { filled: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < filled ? 'text-[#f0a500]' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  )
}

// ── Section wrapper ───────────────────────────────────────────────────────────
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(true)
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full items-center justify-between mb-2 group"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="text-sm font-bold text-gray-800 group-hover:text-amazon-orange transition-colors">
          {title}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div>{children}</div>}
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
export default function FilterSortPanel({ filters, onChange, totalCount }: Props) {
  const set = <K extends keyof FilterState>(key: K, val: FilterState[K]) =>
    onChange({ ...filters, [key]: val })

  const hasActiveFilters =
    filters.sort !== 'featured' ||
    filters.priceRange !== '' ||
    filters.minRating !== 0 ||
    filters.inStockOnly

  // ── Sort options ─────────────────────────────────────────────────────────
  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'featured', label: 'Featured' },
    { value: 'price_asc', label: 'Price: Low to High' },
    { value: 'price_desc', label: 'Price: High to Low' },
    { value: 'rating_desc', label: 'Avg. Customer Review' },
    { value: 'name_asc', label: 'Name: A to Z' },
  ]

  // ── Price ranges ─────────────────────────────────────────────────────────
  const priceRanges: { value: PriceRange; label: string }[] = [
    { value: 'under_500', label: 'Under ₹500' },
    { value: '500_1000', label: '₹500 – ₹1,000' },
    { value: '1000_2000', label: '₹1,000 – ₹2,000' },
    { value: '2000_3000', label: '₹2,000 – ₹3,000' },
    { value: 'over_3000', label: 'Over ₹3,000' },
  ]

  return (
    <aside className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-base font-extrabold text-gray-900">Filters</h2>
        {hasActiveFilters && (
          <button
            onClick={() => onChange(DEFAULT_FILTERS)}
            className="text-xs text-[#007185] hover:text-amazon-orange hover:underline"
          >
            Clear all
          </button>
        )}
      </div>
      <p className="text-xs text-gray-400 mb-3">
        {totalCount} result{totalCount !== 1 ? 's' : ''}
      </p>

      {/* ── Sort By ─────────────────────────────────────────────────────── */}
      <Section title="Sort By">
        <ul className="space-y-1.5">
          {sortOptions.map((opt) => (
            <li key={opt.value}>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="sort"
                  value={opt.value}
                  checked={filters.sort === opt.value}
                  onChange={() => set('sort', opt.value)}
                  className="accent-amazon-orange"
                />
                <span
                  className={`text-sm transition-colors ${
                    filters.sort === opt.value
                      ? 'text-amazon-orange font-semibold'
                      : 'text-gray-700 group-hover:text-amazon-orange'
                  }`}
                >
                  {opt.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Customer Reviews ─────────────────────────────────────────────── */}
      <Section title="Customer Reviews">
        <ul className="space-y-2">
          {([4, 3, 0] as MinRating[]).map((r) => (
            <li key={r}>
              <button
                onClick={() => set('minRating', filters.minRating === r ? 0 : r)}
                className={`flex items-center gap-1.5 text-sm w-full text-left group transition-colors ${
                  filters.minRating === r ? 'text-amazon-orange font-semibold' : 'text-[#007185] hover:text-amazon-orange'
                }`}
              >
                {r === 0 ? (
                  <span className="text-xs text-gray-500">All ratings</span>
                ) : (
                  <>
                    <Stars filled={r} />
                    <span className="text-xs">& Up</span>
                  </>
                )}
              </button>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Price ────────────────────────────────────────────────────────── */}
      <Section title="Price">
        <ul className="space-y-1.5">
          {priceRanges.map((r) => (
            <li key={r.value}>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="priceRange"
                  value={r.value}
                  checked={filters.priceRange === r.value}
                  onChange={() =>
                    set('priceRange', filters.priceRange === r.value ? '' : r.value)
                  }
                  className="accent-amazon-orange"
                />
                <span
                  className={`text-sm transition-colors ${
                    filters.priceRange === r.value
                      ? 'text-amazon-orange font-semibold'
                      : 'text-[#007185] group-hover:text-amazon-orange'
                  }`}
                >
                  {r.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Availability ─────────────────────────────────────────────────── */}
      <Section title="Availability">
        <label className="flex items-center gap-2 cursor-pointer group">
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) => set('inStockOnly', e.target.checked)}
            className="accent-amazon-orange w-4 h-4"
          />
          <span
            className={`text-sm transition-colors ${
              filters.inStockOnly
                ? 'text-amazon-orange font-semibold'
                : 'text-gray-700 group-hover:text-amazon-orange'
            }`}
          >
            In Stock Only
          </span>
        </label>
      </Section>
    </aside>
  )
}
