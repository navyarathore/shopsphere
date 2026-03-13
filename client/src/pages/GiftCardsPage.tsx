import { useState } from 'react'
import { useCart } from '../context/CartContext'

// ── Data ──────────────────────────────────────────────────────────────────────

interface GiftCard {
  id: string
  title: string
  tagline: string
  emoji: string
  gradientFrom: string
  gradientVia?: string
  gradientTo: string
  textColor: string
  accentColor: string
  amounts: number[]
}

interface Occasion {
  id: string
  label: string
  emoji: string
  cards: GiftCard[]
}

const OCCASIONS: Occasion[] = [
  {
    id: 'birthdays',
    label: 'Birthdays',
    emoji: '🎂',
    cards: [
      {
        id: 'bday-confetti',
        title: 'Confetti Celebration',
        tagline: 'Make their day unforgettable',
        emoji: '🎉',
        gradientFrom: '#f72585',
        gradientVia: '#b5179e',
        gradientTo: '#7209b7',
        textColor: '#fff',
        accentColor: '#ffd166',
        amounts: [10, 25, 50, 100],
      },
      {
        id: 'bday-golden',
        title: 'Golden Year',
        tagline: 'For the one who deserves the best',
        emoji: '🌟',
        gradientFrom: '#f4a261',
        gradientVia: '#e76f51',
        gradientTo: '#c1440e',
        textColor: '#fff',
        accentColor: '#ffd166',
        amounts: [25, 50, 100, 200],
      },
    ],
  },
  {
    id: 'christmas',
    label: 'Christmas & Holidays',
    emoji: '🎄',
    cards: [
      {
        id: 'xmas-classic',
        title: 'Festive Classic',
        tagline: 'Spread the joy of giving',
        emoji: '🎁',
        gradientFrom: '#1b4332',
        gradientVia: '#2d6a4f',
        gradientTo: '#40916c',
        textColor: '#fff',
        accentColor: '#d62828',
        amounts: [10, 25, 50, 100],
      },
      {
        id: 'xmas-snow',
        title: 'Winter Wonderland',
        tagline: 'Warm hearts on cold nights',
        emoji: '❄️',
        gradientFrom: '#023e8a',
        gradientVia: '#0077b6',
        gradientTo: '#90e0ef',
        textColor: '#fff',
        accentColor: '#ffd166',
        amounts: [25, 50, 100],
      },
    ],
  },
  {
    id: 'valentines',
    label: "Valentine's Day",
    emoji: '💝',
    cards: [
      {
        id: 'val-hearts',
        title: 'With All My Heart',
        tagline: 'Tell them how much they mean',
        emoji: '❤️',
        gradientFrom: '#c9184a',
        gradientVia: '#ff4d6d',
        gradientTo: '#ff758f',
        textColor: '#fff',
        accentColor: '#fff0f3',
        amounts: [25, 50, 100],
      },
      {
        id: 'val-rose',
        title: 'Rose Gold Romance',
        tagline: 'Elegance for those you cherish',
        emoji: '🌹',
        gradientFrom: '#6d2b4e',
        gradientVia: '#c4627a',
        gradientTo: '#e8a0b4',
        textColor: '#fff',
        accentColor: '#ffd6e0',
        amounts: [25, 50, 100, 200],
      },
    ],
  },
  {
    id: 'graduation',
    label: 'Graduation',
    emoji: '🎓',
    cards: [
      {
        id: 'grad-gold',
        title: 'Future Bright',
        tagline: 'Celebrate every achievement',
        emoji: '🏆',
        gradientFrom: '#212529',
        gradientVia: '#343a40',
        gradientTo: '#495057',
        textColor: '#fff',
        accentColor: '#ffd166',
        amounts: [25, 50, 100, 200],
      },
    ],
  },
  {
    id: 'mothers-day',
    label: "Mother's Day",
    emoji: '💐',
    cards: [
      {
        id: 'mom-bloom',
        title: 'In Full Bloom',
        tagline: 'For the woman who does it all',
        emoji: '🌸',
        gradientFrom: '#d4a5a5',
        gradientVia: '#e8b4b8',
        gradientTo: '#f6d0d0',
        textColor: '#6b2737',
        accentColor: '#6b2737',
        amounts: [25, 50, 100],
      },
      {
        id: 'mom-sunrise',
        title: 'Sunrise Serenity',
        tagline: 'She deserves a beautiful day',
        emoji: '🌅',
        gradientFrom: '#ff9a3c',
        gradientVia: '#ff6b6b',
        gradientTo: '#c0392b',
        textColor: '#fff',
        accentColor: '#fff',
        amounts: [25, 50, 100, 200],
      },
    ],
  },
  {
    id: 'fathers-day',
    label: "Father's Day",
    emoji: '👔',
    cards: [
      {
        id: 'dad-classic',
        title: 'The Classic',
        tagline: 'For the hero in your life',
        emoji: '🛠️',
        gradientFrom: '#003049',
        gradientVia: '#1d4e89',
        gradientTo: '#2c6e9e',
        textColor: '#fff',
        accentColor: '#ffd166',
        amounts: [25, 50, 100, 200],
      },
    ],
  },
  {
    id: 'weddings',
    label: 'Weddings & Anniversaries',
    emoji: '💍',
    cards: [
      {
        id: 'wed-pearl',
        title: 'Pearl Elegance',
        tagline: 'A gift as timeless as love',
        emoji: '🕊️',
        gradientFrom: '#f8f9fa',
        gradientVia: '#e9ecef',
        gradientTo: '#dee2e6',
        textColor: '#2b2d42',
        accentColor: '#c9a84c',
        amounts: [50, 100, 200, 500],
      },
      {
        id: 'wed-gold',
        title: 'Golden Union',
        tagline: 'Celebrate a lifetime together',
        emoji: '✨',
        gradientFrom: '#3d1a1a',
        gradientVia: '#7b3f00',
        gradientTo: '#c4862a',
        textColor: '#fff',
        accentColor: '#ffd700',
        amounts: [50, 100, 200, 500],
      },
    ],
  },
  {
    id: 'thank-you',
    label: 'Thank You',
    emoji: '🙏',
    cards: [
      {
        id: 'ty-green',
        title: 'Gratitude in Bloom',
        tagline: 'Because words are never enough',
        emoji: '🌿',
        gradientFrom: '#1a535c',
        gradientVia: '#4ecdc4',
        gradientTo: '#a8dadc',
        textColor: '#fff',
        accentColor: '#fff',
        amounts: [10, 25, 50],
      },
    ],
  },
  {
    id: 'just-because',
    label: 'Just Because',
    emoji: '✨',
    cards: [
      {
        id: 'jb-surprise',
        title: 'Happy Surprise',
        tagline: 'No reason needed — you matter',
        emoji: '🌈',
        gradientFrom: '#6a0572',
        gradientVia: '#a855f7',
        gradientTo: '#ec4899',
        textColor: '#fff',
        accentColor: '#fde68a',
        amounts: [10, 25, 50, 100],
      },
    ],
  },
]

// ── Gift Card visual ──────────────────────────────────────────────────────────

interface GiftCardVisualProps {
  card: GiftCard
  selectedAmount: number
  onSelectAmount: (a: number) => void
  onAdd: () => void
}

function GiftCardVisual({ card, selectedAmount, onSelectAmount, onAdd }: GiftCardVisualProps) {
  const gradientStyle = card.gradientVia
    ? { background: `linear-gradient(135deg, ${card.gradientFrom}, ${card.gradientVia}, ${card.gradientTo})` }
    : { background: `linear-gradient(135deg, ${card.gradientFrom}, ${card.gradientTo})` }

  return (
    <div className="flex flex-col gap-3">
      {/* Card visual */}
      <div
        className="relative rounded-2xl overflow-hidden shadow-lg aspect-[1.586/1] w-full select-none"
        style={gradientStyle}
      >
        {/* Subtle watermark circles */}
        <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full opacity-10 bg-white" />
        <div className="absolute -bottom-8 -left-4 w-36 h-36 rounded-full opacity-10 bg-white" />

        {/* ShopSphere wordmark */}
        <div
          className="absolute top-4 left-5 text-[10px] font-extrabold tracking-[0.2em] uppercase opacity-80"
          style={{ color: card.textColor }}
        >
          ShopSphere
        </div>

        {/* Chip */}
        <div
          className="absolute top-4 right-5 w-8 h-6 rounded-md opacity-70"
          style={{ background: card.accentColor }}
        />

        {/* Centre emoji & title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
          <span className="text-3xl leading-none drop-shadow">{card.emoji}</span>
          <p
            className="text-base font-extrabold tracking-tight drop-shadow text-center px-4 leading-tight"
            style={{ color: card.textColor }}
          >
            {card.title}
          </p>
          <p
            className="text-[10px] opacity-70 text-center px-6"
            style={{ color: card.textColor }}
          >
            {card.tagline}
          </p>
        </div>

        {/* Amount badge */}
        <div
          className="absolute bottom-4 right-5 text-sm font-extrabold px-3 py-1 rounded-full shadow"
          style={{ background: card.accentColor, color: card.gradientFrom }}
        >
          ${selectedAmount}
        </div>
      </div>

      {/* Amount selector */}
      <div className="flex gap-2 flex-wrap justify-center">
        {card.amounts.map((amt) => (
          <button
            key={amt}
            onClick={() => onSelectAmount(amt)}
            className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-all ${
              selectedAmount === amt
                ? 'bg-amber-400 border-amber-400 text-gray-900 shadow'
                : 'bg-white border-gray-200 text-gray-600 hover:border-amber-400'
            }`}
          >
            ${amt}
          </button>
        ))}
      </div>

      {/* CTA */}
      <button
        onClick={onAdd}
        className="w-full bg-amber-400 hover:bg-amber-300 active:scale-95 text-gray-900 font-extrabold text-sm py-2.5 rounded-full transition-all shadow hover:shadow-md"
      >
        🎁 Add to Cart — ${selectedAmount}
      </button>
    </div>
  )
}

// ── Occasion section ──────────────────────────────────────────────────────────

function OccasionSection({ occasion }: { occasion: Occasion }) {
  const { addToCart } = useCart()

  // Track selected amount per card
  const [selectedAmounts, setSelectedAmounts] = useState<Record<string, number>>(
    () => Object.fromEntries(occasion.cards.map((c) => [c.id, c.amounts[1] ?? c.amounts[0]])),
  )
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set())

  const handleAdd = (card: GiftCard) => {
    const amount = selectedAmounts[card.id]
    addToCart({
      id: card.id,
      name: `${card.title} Gift Card`,
      price: amount,
      main_image_url: '',
      category_name: 'Gift Cards',
      stock: 99,
      description: `${card.tagline} — $${amount} gift card`,
    } as never)
    setAddedIds((prev) => new Set(prev).add(card.id))
    setTimeout(() => setAddedIds((prev) => { const s = new Set(prev); s.delete(card.id); return s }), 1800)
  }

  return (
    <section>
      {/* Section header */}
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl leading-none">{occasion.emoji}</span>
        <div>
          <p className="text-[11px] font-bold text-amber-600 uppercase tracking-widest leading-none mb-0.5">
            Gift Cards
          </p>
          <h2 className="text-lg font-extrabold text-gray-900 leading-tight">{occasion.label}</h2>
        </div>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Cards grid */}
      <div
        className={`grid gap-6 ${
          occasion.cards.length === 1 ? 'grid-cols-1 max-w-xs' : 'grid-cols-1 sm:grid-cols-2'
        }`}
      >
        {occasion.cards.map((card) => (
          <div key={card.id} className="relative">
            {addedIds.has(card.id) && (
              <div className="absolute inset-0 z-10 bg-white/80 rounded-2xl flex flex-col items-center justify-center gap-1 backdrop-blur-sm pointer-events-none">
                <span className="text-3xl">✅</span>
                <p className="text-sm font-bold text-green-700">Added to cart!</p>
              </div>
            )}
            <GiftCardVisual
              card={card}
              selectedAmount={selectedAmounts[card.id]}
              onSelectAmount={(a) => setSelectedAmounts((prev) => ({ ...prev, [card.id]: a }))}
              onAdd={() => handleAdd(card)}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function GiftCardsPage() {
  return (
    <div className="bg-[#f0f2f5] min-h-screen">
      {/* Hero banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#131921] via-[#232f3e] to-[#37475a] py-14 px-6 text-center">
        {/* Decorative blobs */}
        <div className="absolute -top-10 -left-10 w-52 h-52 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <p className="relative text-amber-400 text-xs font-bold uppercase tracking-[0.25em] mb-2">
          The perfect present, always
        </p>
        <h1 className="relative text-white text-3xl sm:text-4xl font-extrabold leading-tight">
          🎁 ShopSphere Gift Cards
        </h1>
        <p className="relative mt-3 text-gray-300 text-sm max-w-lg mx-auto leading-relaxed">
          Give the gift of choice. Gift cards never expire, work on everything on ShopSphere,
          and are delivered instantly.
        </p>

        {/* Pills */}
        <div className="relative mt-6 flex flex-wrap justify-center gap-2">
          {['Never expires', 'Instant delivery', 'Any amount', 'Easy to redeem'].map((p) => (
            <span
              key={p}
              className="bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20"
            >
              ✓ {p}
            </span>
          ))}
        </div>
      </div>

      {/* Quick-jump nav */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 flex gap-1 overflow-x-auto scrollbar-hide py-2">
          {OCCASIONS.map((o) => (
            <a
              key={o.id}
              href={`#${o.id}`}
              className="flex-shrink-0 flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-amber-600 hover:bg-amber-50 px-3 py-1.5 rounded-full transition-colors"
            >
              <span>{o.emoji}</span>
              <span className="whitespace-nowrap">{o.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Occasion sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 flex flex-col gap-14">
        {OCCASIONS.map((occasion) => (
          <div key={occasion.id} id={occasion.id}>
            <OccasionSection occasion={occasion} />
          </div>
        ))}

        {/* Bottom note */}
        <div className="rounded-2xl bg-white border border-gray-200 shadow-sm px-6 py-5 text-center">
          <p className="text-sm font-bold text-gray-800 mb-1">How it works</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-3 text-center text-xs text-gray-500">
            {[
              { icon: '🛒', step: '1. Choose a card & amount' },
              { icon: '✉️', step: '2. Add to cart & checkout' },
              { icon: '📬', step: '3. Delivered instantly by email' },
              { icon: '🛍️', step: '4. Recipient shops anything on ShopSphere' },
            ].map(({ icon, step }) => (
              <div key={step} className="flex flex-col items-center gap-1">
                <span className="text-2xl">{icon}</span>
                <span className="font-semibold">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
