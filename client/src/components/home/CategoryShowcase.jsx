import { Link } from 'react-router-dom'

/**
 * A single promo card displaying a title + 2×2 product image grid.
 * Products are taken from the `products` array (first 4 used).
 */
function PromoCard({ title, subtitle, products = [], viewAllLink, accentColor = '#131921' }) {
  // Pad to 4 with placeholder if fewer products available
  const displayProducts = [...products].slice(0, 4)
  while (displayProducts.length < 4) {
    displayProducts.push(null)
  }

  return (
    <div className="bg-white rounded-md shadow-sm p-4 flex flex-col gap-3 hover:shadow-md transition-shadow">
      <div>
        <h3 className="font-bold text-gray-900 text-base leading-tight">{title}</h3>
        {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
      </div>

      <div className="grid grid-cols-2 gap-2 flex-1">
        {displayProducts.map((product, i) => (
          <div key={i} className="aspect-square overflow-hidden rounded bg-gray-100">
            {product ? (
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.main_image_url}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </Link>
            ) : (
              <div className="w-full h-full bg-gray-200 animate-pulse" />
            )}
          </div>
        ))}
      </div>

      <Link
        to={viewAllLink}
        className="text-sm font-medium hover:underline mt-auto"
        style={{ color: accentColor === '#131921' ? '#007185' : accentColor }}
      >
        See more →
      </Link>
    </div>
  )
}

/**
 * Renders the Amazon-style 4-column promo grid.
 * Expects `categoryMap` = { [categoryName]: product[] }
 */
export default function CategoryShowcase({ categoryMap = {}, loading = false }) {
  const cards = [
    {
      title: 'Big savings on Electronics',
      subtitle: 'Up to 40% off | Gadgets & Accessories',
      category: 'Electronics',
      link: '/?category=Electronics',
    },
    {
      title: 'Appliances for your home',
      subtitle: 'Up to 55% off | Home & Kitchen',
      category: 'Home & Kitchen',
      link: '/?category=Home+%26+Kitchen',
    },
    {
      title: 'Bestsellers in Books',
      subtitle: 'Dev, Self-help, Fiction & more',
      category: 'Books',
      link: '/?category=Books',
    },
    {
      title: "Today's Fashion Picks",
      subtitle: 'Best Sellers in Clothing & Accessories',
      category: 'Clothing',
      link: '/?category=Clothing',
    },
    {
      title: 'Sports & Outdoors',
      subtitle: 'Gear up for your active lifestyle',
      category: 'Sports & Outdoors',
      link: '/?category=Sports+%26+Outdoors',
    },
    {
      title: 'Fresh Produce & Groceries',
      subtitle: 'Organic picks delivered to your door',
      category: 'Fresh',
      link: '/?category=Fresh',
    },
    {
      title: 'Latest Mobile Phones',
      subtitle: 'Top smartphones from leading brands',
      category: 'Mobiles',
      link: '/?category=Mobiles',
    },
    {
      title: 'Toys & Games for Everyone',
      subtitle: 'Fun for kids and adults alike',
      category: 'Toys & Games',
      link: '/?category=Toys+%26+Games',
    },
    {
      title: 'Laptops & Desktops',
      subtitle: 'Power-packed computers for every need',
      category: 'Computers',
      link: '/?category=Computers',
    },
  ]

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="bg-white rounded-md shadow-sm p-4 animate-pulse">
            <div className="h-4 bg-gray-200 rounded mb-3 w-3/4" />
            <div className="grid grid-cols-2 gap-2">
              {Array.from({ length: 4 }).map((_, j) => (
                <div key={j} className="aspect-square bg-gray-200 rounded" />
              ))}
            </div>
            <div className="h-3 bg-gray-200 rounded mt-3 w-1/3" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {cards.map((card) => (
        <PromoCard
          key={card.title}
          title={card.title}
          subtitle={card.subtitle}
          products={categoryMap[card.category] || []}
          viewAllLink={card.link}
        />
      ))}
    </div>
  )
}
