import { Link } from 'react-router-dom'

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
    heading: 'Connect with Us',
    links: [
      { label: 'Facebook', to: '#' },
      { label: 'Twitter', to: '#' },
      { label: 'Instagram', to: '#' },
    ],
  },
  {
    heading: 'Make Money with Us',
    links: [
      { label: 'Sell on ShopSphere', to: '#' },
      { label: 'Sell under ShopSphere Accelerator', to: '#' },
      { label: 'Protect and Build Your Brand', to: '#' },
      { label: 'ShopSphere Global Selling', to: '#' },
      { label: 'Supply to ShopSphere', to: '#' },
      { label: 'Become an Affiliate', to: '#' },
      { label: 'Fulfilment by ShopSphere', to: '#' },
      { label: 'Advertise Your Products', to: '#' },
      { label: 'ShopSphere Pay on Merchants', to: '#' },
    ],
  },
  {
    heading: 'Let Us Help You',
    links: [
      { label: 'Your Account', to: '/orders' },
      { label: 'Returns Centre', to: '#' },
      { label: 'Recalls and Product Safety Alerts', to: '#' },
      { label: '100% Purchase Protection', to: '#' },
      { label: 'ShopSphere App Download', to: '#' },
      { label: 'Help', to: '#' },
    ],
  },
]

const SUBSIDIARIES = [
  { name: 'SphereBooks', sub: 'Books, art & collectibles' },
  { name: 'Sphere Web Services', sub: 'Scalable Cloud Computing Services' },
  { name: 'Audible', sub: 'Download Audio Books' },
  { name: 'IMDb', sub: 'Movies, TV & Celebrities' },
  { name: 'Shopbop', sub: 'Designer Fashion Brands' },
  { name: 'ShopSphere Business', sub: 'Everything For Your Business' },
  { name: 'Sphere Music', sub: '100 million songs, ad-free' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="mt-auto">
      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="w-full bg-[#37475a] hover:bg-[#485769] text-white text-sm py-3 transition-colors"
      >
        Back to top
      </button>

      {/* Main footer links */}
      <div className="bg-amazon-lightblue text-white py-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.heading}>
                <h3 className="font-bold text-base mb-3">{col.heading}</h3>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-gray-300 hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-amazon-lightblue">
        <div className="max-w-[1200px] mx-auto px-6">
          <hr className="border-gray-600" />
        </div>
      </div>

      {/* Logo + language / country */}
      <div className="bg-amazon-lightblue text-white py-6">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Logo */}
          <Link to="/" className="border border-gray-500 hover:border-white rounded px-3 py-1 flex-shrink-0">
            <span className="text-lg font-extrabold text-amazon-yellow">
              Shop<span className="text-white">Sphere</span>
            </span>
            <span className="text-[10px] text-gray-300 block text-center tracking-widest">.in</span>
          </Link>

          {/* Language selector */}
          <button className="flex items-center gap-2 border border-gray-500 hover:border-white rounded px-4 py-2 text-sm text-white">
            🌐 <span>English</span> <span className="text-gray-400">▾</span>
          </button>

          {/* Country selector */}
          <button className="flex items-center gap-2 border border-gray-500 hover:border-white rounded px-4 py-2 text-sm text-white">
            🇮🇳 <span>India</span> <span className="text-gray-400">▾</span>
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-amazon-lightblue">
        <div className="max-w-[1200px] mx-auto px-6">
          <hr className="border-gray-600" />
        </div>
      </div>

      {/* Subsidiary brands */}
      <div className="bg-amazon-lightblue text-white py-8">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-5">
            {SUBSIDIARIES.map((s) => (
              <a
                key={s.name}
                href="#"
                className="text-center hover:underline"
              >
                <span className="block text-[13px] font-semibold text-gray-200">{s.name}</span>
                <span className="block text-[11px] text-gray-400 max-w-[130px]">{s.sub}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-amazon-blue text-gray-400 py-5">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-center">
          <a href="#" className="hover:text-white hover:underline">Conditions of Use &amp; Sale</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:text-white hover:underline">Privacy Notice</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:text-white hover:underline">Interest-Based Ads</a>
          <span className="hidden sm:inline">|</span>
          <span>© 2026-2026, ShopSphere, Inc. or its affiliates</span>
        </div>
      </div>
    </footer>
  )
}
