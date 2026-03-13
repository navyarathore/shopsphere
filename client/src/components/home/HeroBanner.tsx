import { useEffect, useState, useCallback } from 'react'

const SLIDES = [
  {
    id: 1,
    headline: 'Up to 40% off',
    subline: 'Big savings on Electronics & Accessories',
    cta: 'Shop Electronics',
    ctaLink: '/?category=Electronics',
    badges: [
      { icon: '⚡', label: 'Top Brands' },
      { icon: '🚚', label: 'Free Delivery' },
    ],
    productImg: 'https://picsum.photos/seed/electronics-hero/600/420',
  },
  {
    id: 2,
    headline: 'Fashion Week Deals',
    subline: 'Trending styles starting from $9.99',
    cta: 'Explore Fashion',
    ctaLink: '/?category=Clothing',
    badges: [
      { icon: '👗', label: 'New Arrivals' },
      { icon: '🏷️', label: 'Best Prices' },
    ],
    productImg: 'https://picsum.photos/seed/fashion-hero/600/420',
  },
  {
    id: 3,
    headline: '30% off Popular Books',
    subline: 'Dev, Self-help, Fiction & more',
    cta: 'Browse Books',
    ctaLink: '/?category=Books',
    badges: [
      { icon: '📚', label: 'Bestselling' },
      { icon: '🎁', label: 'Gift Ideas' },
    ],
    productImg: 'https://picsum.photos/seed/books-hero/600/420',
  },
  {
    id: 4,
    headline: 'Revamp Your Home',
    subline: 'Big savings on appliances, décor & more',
    cta: 'Shop Home & Kitchen',
    ctaLink: '/?category=Home+%26+Kitchen',
    badges: [
      { icon: '🏠', label: 'Home Makeover' },
      { icon: '💳', label: 'Pay on Delivery' },
    ],
    productImg: 'https://picsum.photos/seed/home-hero/600/420',
  },
  {
    id: 5,
    headline: 'Sports & Outdoors',
    subline: 'Top gear for your active lifestyle',
    cta: 'Shop Sports',
    ctaLink: '/?category=Sports+%26+Outdoors',
    badges: [
      { icon: '🏃', label: 'Get Active' },
      { icon: '✅', label: 'Wide Selection' },
    ],
    productImg: 'https://picsum.photos/seed/sports-hero/600/420',
  },
]

const INTERVAL = 5000

export default function HeroBanner() {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback((idx) => {
    if (transitioning) return
    setTransitioning(true)
    setTimeout(() => {
      setCurrent(idx)
      setTransitioning(false)
    }, 350)
  }, [transitioning])

  const prev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length)
  }, [current, goTo])

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length)
  }, [current, goTo])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, INTERVAL)
    return () => clearInterval(timer)
  }, [next, paused])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])

  const slide = SLIDES[current]

  return (
    <div
      className="relative w-full select-none overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide */}
      <div
        style={{
          transition: 'opacity 400ms ease',
          opacity: transitioning ? 0 : 1,
          backgroundImage: `url(${slide.productImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Left overlay so text stays readable */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(243,244,246,0.92) 0%, rgba(243,244,246,0.75) 35%, rgba(243,244,246,0.2) 60%, transparent 100%)',
          }}
        />
        <div className="relative max-w-5xl mx-auto px-10 sm:px-16 pt-10 pb-28 flex flex-col sm:flex-row items-center gap-6 sm:gap-10 min-h-[300px] z-10">

          {/* Text side */}
          <div className="flex-1 min-w-0 flex flex-col justify-center max-w-md">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-2 text-gray-900">
              {slide.headline}
            </h2>
            <p className="text-base sm:text-lg mb-5 text-gray-700">
              {slide.subline}
            </p>

            {/* Feature badges */}
            <div className="flex items-center gap-0 mb-6">
              {slide.badges.map((b, i) => (
                <div key={b.label} className="flex items-center">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 text-gray-700">
                    <span className="text-base">{b.icon}</span>
                    <span className="text-xs font-bold uppercase tracking-wide">{b.label}</span>
                  </div>
                  {i < slide.badges.length - 1 && (
                    <div className="w-px h-5 bg-gray-400" />
                  )}
                </div>
              ))}
            </div>

            <a
              href={slide.ctaLink}
              className="inline-flex items-center gap-2 w-fit px-6 py-2.5 rounded font-bold text-sm bg-[#febd69] hover:bg-[#f3a847] text-gray-900 shadow transition-all duration-200 hover:scale-105 active:scale-95"
            >
              {slide.cta}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-1 sm:left-2 top-1/2 -translate-y-8 bg-white/70 hover:bg-white text-gray-700 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 hover:scale-110 z-20 shadow border border-gray-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-1 sm:right-2 top-1/2 -translate-y-8 bg-white/70 hover:bg-white text-gray-700 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 hover:scale-110 z-20 shadow border border-gray-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="rounded-full transition-all duration-300 border border-gray-300"
            style={{
              width: i === current ? '2rem' : '0.5rem',
              height: '0.5rem',
              background: i === current ? '#febd69' : 'rgba(0,0,0,0.2)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
