import { Link } from 'react-router-dom'
import { useState } from 'react'

/* ── SVG icon helpers ─────────────────────────────────────────── */
const ChevronUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
    <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 0 1-1.06-.02L10 8.832l-3.71 3.938a.75.75 0 1 1-1.08-1.04l4.25-4.5a.75.75 0 0 1 1.08 0l4.25 4.5a.75.75 0 0 1-.02 1.06Z" clipRule="evenodd" />
  </svg>
)

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM4.98 9a6.5 6.5 0 0 1 3.29-5.15C7.64 5.14 7 6.83 7 9H4.98Zm.28 2c.32 1.93 1.32 3.6 2.74 4.74A6.51 6.51 0 0 1 4.98 11h.28Zm4.74 5a6.51 6.51 0 0 0 4.74-5H13c-.32 1.93-1.32 3.6-2.74 4.74a6.58 6.58 0 0 1-.26.26ZM13 11a6.5 6.5 0 0 1-3 5.45V16c0 .55.45 1 1 1h1a1 1 0 0 0 1-1v-.55A6.5 6.5 0 0 1 13 11Zm2.02-2H13c0-2.17-.64-3.86-1.27-5.15A6.5 6.5 0 0 1 15.02 9ZM9 3.55V4c0-.45-.37-.82-.82-.84A6.5 6.5 0 0 0 5.26 6.5 6.47 6.47 0 0 1 9 3.55ZM9 9H7c0-2.6.85-4.5 2-5.43V9Zm0 2v4.43C7.85 14.5 7 12.6 7 10H9Zm2 0h2c0 2.6-.85 4.5-2 5.43V11Zm0-2V3.57C12.15 4.5 13 6.4 13 9h-2Z" clipRule="evenodd" />
  </svg>
)

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 opacity-60">
    <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
  </svg>
)

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

/* ── Data ─────────────────────────────────────────────────────── */
const FOOTER_COLUMNS = [
  {
    heading: 'Get to Know Us',
    links: [
      { label: 'About ShopSphere', to: '#' },
      { label: 'Careers', to: '#' },
      { label: 'Press Releases', to: '#' },
      { label: 'ShopSphere Science', to: '#' },
    ],
  },
  {
    heading: 'Make Money with Us',
    links: [
      { label: 'Sell on ShopSphere', to: '#' },
      { label: 'ShopSphere Accelerator', to: '#' },
      { label: 'Build Your Brand', to: '#' },
      { label: 'ShopSphere Global Selling', to: '#' },
      { label: 'Become an Affiliate', to: '#' },
      { label: 'Fulfilment by ShopSphere', to: '#' },
      { label: 'Advertise Your Products', to: '#' },
    ],
  },
  {
    heading: 'Let Us Help You',
    links: [
      { label: 'Your Account', to: '/orders' },
      { label: 'Returns Centre', to: '#' },
      { label: 'Product Safety Alerts', to: '#' },
      { label: '100% Purchase Protection', to: '#' },
      { label: 'ShopSphere App', to: '#' },
      { label: 'Help', to: '#' },
    ],
  },
]

const SOCIAL_LINKS = [
  { label: 'Facebook', icon: <FacebookIcon />, href: '#' },
  { label: 'X (Twitter)', icon: <XIcon />, href: '#' },
  { label: 'Instagram', icon: <InstagramIcon />, href: '#' },
]

const SUBSIDIARIES = [
  { name: 'SphereBooks', sub: 'Books, art & collectibles' },
  { name: 'Sphere Web Services', sub: 'Scalable Cloud Computing' },
  { name: 'Audible', sub: 'Download Audio Books' },
  { name: 'IMDb', sub: 'Movies, TV & Celebrities' },
  { name: 'Shopbop', sub: 'Designer Fashion Brands' },
  { name: 'ShopSphere Business', sub: 'Everything For Your Business' },
  { name: 'Sphere Music', sub: '100 million songs, ad-free' },
]

const BOTTOM_LINKS = [
  'Conditions of Use & Sale',
  'Privacy Notice',
  'Interest-Based Ads',
  'Cookie Preferences',
]

/* ── Component ────────────────────────────────────────────────── */
export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) setSubscribed(true)
  }

  return (
    <footer className="mt-auto">

      {/* ── Newsletter strip ──────────────────────────────────── */}
      <div className="bg-[#1a2634] text-white py-8 border-b border-gray-700">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-base font-semibold text-amazon-yellow">Stay in the loop</p>
            <p className="text-sm text-gray-400 mt-0.5">Get deals, launch alerts &amp; more — straight to your inbox.</p>
          </div>
          {subscribed ? (
            <p className="text-sm text-green-400 font-medium">✓ You're subscribed!</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex w-full sm:w-auto gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 sm:w-64 rounded px-3 py-2 text-sm bg-[#0d1a26] border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-amazon-yellow"
              />
              <button
                type="submit"
                className="bg-amazon-yellow hover:bg-amazon-orange text-amazon-blue font-semibold text-sm px-4 py-2 rounded transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* ── Back to top ───────────────────────────────────────── */}
      <button
        onClick={scrollToTop}
        className="w-full bg-[#37475a] hover:bg-[#48586b] text-white text-sm py-3 transition-colors flex items-center justify-center gap-2 group"
      >
        <span className="transition-transform group-hover:-translate-y-0.5"><ChevronUpIcon /></span>
        Back to top
      </button>

      {/* ── Main link columns ─────────────────────────────────── */}
      <div className="bg-amazon-lightblue text-white pt-10 pb-6">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.heading}>
                <h3 className="font-bold text-sm uppercase tracking-wider text-amazon-yellow mb-4">
                  {col.heading}
                </h3>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-gray-300 hover:text-white text-sm transition-colors relative group"
                      >
                        <span className="border-b border-transparent group-hover:border-gray-400 pb-px transition-colors">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social column */}
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider text-amazon-yellow mb-4">
                Connect with Us
              </h3>
              <ul className="space-y-3">
                {SOCIAL_LINKS.map(({ label, icon, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="flex items-center gap-2.5 text-gray-300 hover:text-white text-sm transition-colors group"
                    >
                      <span className="p-1.5 rounded bg-white/10 group-hover:bg-white/20 transition-colors">
                        {icon}
                      </span>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Divider ───────────────────────────────────────────── */}
      <div className="bg-amazon-lightblue px-6">
        <div className="max-w-[1200px] mx-auto border-t border-gray-600/60" />
      </div>

      {/* ── Logo + selectors ──────────────────────────────────── */}
      <div className="bg-amazon-lightblue text-white py-6">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="border border-gray-500 hover:border-amazon-yellow rounded px-4 py-2 flex-shrink-0 transition-colors group"
          >
            <span className="text-base font-extrabold text-amazon-yellow group-hover:text-amazon-orange transition-colors">
              Shop<span className="text-white">Sphere</span>
            </span>
          </Link>

          <button className="flex items-center gap-2 border border-gray-500 hover:border-white rounded px-4 py-2 text-sm text-white transition-colors">
            <GlobeIcon />
            <span>English</span>
            <ChevronDownIcon />
          </button>

          <button className="flex items-center gap-2 border border-gray-500 hover:border-white rounded px-4 py-2 text-sm text-white transition-colors">
            <span className="text-base leading-none">🇮🇳</span>
            <span>India</span>
            <ChevronDownIcon />
          </button>
        </div>
      </div>

      {/* ── Divider ───────────────────────────────────────────── */}
      <div className="bg-amazon-lightblue px-6">
        <div className="max-w-[1200px] mx-auto border-t border-gray-600/60" />
      </div>

      {/* ── Subsidiary brands ─────────────────────────────────── */}
      <div className="bg-amazon-lightblue text-white py-8">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-5">
            {SUBSIDIARIES.map((s) => (
              <a
                key={s.name}
                href="#"
                className="text-center group"
              >
                <span className="block text-[13px] font-semibold text-gray-200 group-hover:text-white transition-colors">
                  {s.name}
                </span>
                <span className="block text-[11px] text-gray-500 group-hover:text-gray-400 max-w-[140px] transition-colors mt-0.5">
                  {s.sub}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────────── */}
      <div className="bg-amazon-blue text-gray-500 py-5">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-2 text-xs text-center flex-wrap">
          {BOTTOM_LINKS.map((label, i) => (
            <span key={label} className="flex items-center gap-4">
              <a href="#" className="hover:text-gray-300 transition-colors">{label}</a>
              {i < BOTTOM_LINKS.length - 1 && (
                <span className="hidden sm:inline text-gray-700">|</span>
              )}
            </span>
          ))}
          <span className="hidden sm:inline text-gray-700">|</span>
          <span className="text-gray-600">© 2026 ShopSphere, Inc. or its affiliates</span>
        </div>
      </div>

    </footer>
  )
}
