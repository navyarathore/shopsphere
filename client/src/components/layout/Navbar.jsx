import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import { useAuth } from '../../context/AuthContext'
import { CATEGORY_NAV_ITEMS, SEARCH_CATEGORIES } from '../../constants/categories'

export default function Navbar() {
  const { cartCount } = useCart()
  const { wishlistCount } = useWishlist()
  const { user, logout } = useAuth()
  const [searchInput, setSearchInput] = useState('')
  const [category, setCategory] = useState('All')
  const [accountMenuOpen, setAccountMenuOpen] = useState(false)
  const accountMenuRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (accountMenuRef.current && !accountMenuRef.current.contains(e.target)) {
        setAccountMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (searchInput.trim()) params.set('search', searchInput.trim())
    if (category !== 'All') params.set('category', category)
    navigate(`/?${params.toString()}`)
  }

  return (
    <header className="sticky top-0 z-50 shadow-lg">
      {/* ── Primary bar ── */}
      <div className="bg-amazon-blue text-white">
        <div className="max-w-[1500px] mx-auto px-3 flex items-center gap-3 h-[60px]">

          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 border-2 border-transparent hover:border-white rounded px-2 py-0.5 mr-1"
          >
            <span className="text-xl font-extrabold tracking-tight text-amazon-yellow leading-none">
              Shop<span className="text-white">Sphere</span>
            </span>
            <span className="block text-[10px] text-gray-300 text-center tracking-widest">.in</span>
          </Link>

          {/* Deliver to */}
          <div className="hidden lg:flex flex-col border-2 border-transparent hover:border-white rounded px-2 py-0.5 cursor-pointer flex-shrink-0">
            <span className="text-[11px] text-gray-300">Delivering to</span>
            <span className="text-sm font-bold flex items-center gap-1">
              📍 Select location
            </span>
          </div>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="flex flex-1 min-w-0 rounded overflow-hidden h-10">
            {/* Category selector */}
            <div className="hidden sm:flex items-center relative border-r border-gray-400 flex-shrink-0 bg-gray-200">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="appearance-none bg-transparent text-gray-800 text-xs font-medium pl-3 pr-7 h-full focus:outline-none cursor-pointer text-center"
              >
                {SEARCH_CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <svg
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search ShopSphere..."
              className="flex-1 min-w-0 px-4 py-2 text-gray-900 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-amazon-yellow hover:bg-amazon-orange px-4 text-gray-900 font-bold transition-colors flex-shrink-0 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.65 4.65a7.5 7.5 0 0012 12z" />
              </svg>
            </button>
          </form>

          {/* Language */}
          <div className="hidden xl:flex flex-col items-center border-2 border-transparent hover:border-white rounded px-2 py-0.5 cursor-pointer flex-shrink-0">
            <span className="text-sm font-bold flex items-center gap-1">🌐 EN ▾</span>
          </div>

          {/* Account & Lists */}
          <div ref={accountMenuRef} className="hidden md:flex relative flex-shrink-0">
            <button
              onClick={() => setAccountMenuOpen((prev) => !prev)}
              className="flex flex-col border-2 border-transparent hover:border-white rounded px-2 py-0.5 cursor-pointer text-left"
            >
              <span className="text-[11px] text-gray-300">
                {user ? `Hello, ${user.name.split(' ')[0]}` : 'Hello, Sign in'}
              </span>
              <span className="text-sm font-bold">Account &amp; Lists ▾</span>
            </button>

            {accountMenuOpen && (
              <div className="absolute top-full right-0 mt-1 w-52 bg-white text-gray-800 rounded shadow-xl z-50 py-2">
                {!user && (
                  <div className="px-4 pb-2">
                    <Link
                      to="/signup"
                      onClick={() => setAccountMenuOpen(false)}
                      className="block w-full text-center bg-amazon-yellow hover:bg-amazon-orange text-gray-900 font-bold py-1.5 rounded text-sm mb-1 transition-colors"
                    >
                      Sign up
                    </Link>
                    <p className="text-xs text-center text-gray-500">
                      Already a customer?{' '}
                      <Link to="/login" onClick={() => setAccountMenuOpen(false)} className="text-blue-600 hover:underline">Sign in</Link>
                    </p>
                  </div>
                )}

                <p className="px-4 py-1 text-xs text-gray-400 uppercase tracking-wider font-semibold">Your Account</p>
                <Link
                  to="/wishlist"
                  onClick={() => setAccountMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                  </svg>
                  Wishlist
                  {wishlistCount > 0 && (
                    <span className="ml-auto bg-red-100 text-red-600 text-xs font-bold rounded-full px-2 py-0.5">
                      {wishlistCount}
                    </span>
                  )}
                </Link>
                <Link
                  to="/orders"
                  onClick={() => setAccountMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Order History
                </Link>

                {user && (
                  <>
                    <div className="border-t border-gray-100 my-1" />
                    <button
                      onClick={async () => {
                        await logout()
                        setAccountMenuOpen(false)
                        navigate('/login')
                      }}
                      className="flex items-center gap-3 w-full px-4 py-2 text-sm hover:bg-gray-100 transition-colors text-left text-gray-700"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Sign Out
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Returns & Orders */}
          <Link
            to="/orders"
            className="hidden md:flex flex-col border-2 border-transparent hover:border-white rounded px-2 py-0.5 flex-shrink-0"
          >
            <span className="text-[11px] text-gray-300">Returns &amp;</span>
            <span className="text-sm font-bold">Orders</span>
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="flex items-end gap-1 border-2 border-transparent hover:border-white rounded px-2 py-0.5 flex-shrink-0"
          >
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13M7 13L5.4 5M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 bg-amazon-yellow text-gray-900 rounded-full text-xs font-extrabold px-1.5 leading-5 min-w-[20px] text-center">
                {cartCount}
              </span>
            </div>
            <span className="hidden sm:block text-sm font-bold pb-1">Cart</span>
          </Link>
        </div>
      </div>

      {/* ── Secondary nav bar ── */}
      <div className="bg-amazon-lightblue text-white">
        <div className="max-w-[1500px] mx-auto px-3 flex items-center justify-center gap-0.5 h-10 overflow-x-auto scrollbar-hide whitespace-nowrap">
          {/* All / hamburger */}
          <Link
            to="/?category=All"
            className="flex items-center gap-1.5 border-2 border-transparent hover:border-white rounded px-3 py-1 text-sm font-bold flex-shrink-0 mr-1"
          >
            <span className="flex flex-col gap-[3px]">
              <span className="block w-4 h-[2px] bg-white"></span>
              <span className="block w-4 h-[2px] bg-white"></span>
              <span className="block w-4 h-[2px] bg-white"></span>
            </span>
            All
          </Link>

          {CATEGORY_NAV_ITEMS.map((item) => (
            <Link
              key={item.query}
              to={`/?category=${encodeURIComponent(item.query)}`}
              className="border-2 border-transparent hover:border-white rounded px-3 py-1 text-sm flex-shrink-0"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
