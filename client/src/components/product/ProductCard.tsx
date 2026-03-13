import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import type { Product } from '../../types'

interface ProductCardProps {
  product: Product
}

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-1 mb-1">
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < Math.floor(rating)
          const half = !filled && i < rating
          return (
            <svg
              key={i}
              className={`w-3 h-3 ${filled || half ? 'text-[#f0a500]' : 'text-gray-300'}`}
              fill={filled ? 'currentColor' : half ? 'url(#half)' : 'currentColor'}
              viewBox="0 0 20 20"
            >
              {half && (
                <defs>
                  <linearGradient id="half">
                    <stop offset="50%" stopColor="#f0a500" />
                    <stop offset="50%" stopColor="#d1d5db" />
                  </linearGradient>
                </defs>
              )}
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          )
        })}
      </div>
      <span className="text-[11px] text-[#007185]">{count.toLocaleString()}</span>
    </div>
  )
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const { isWishlisted, toggleWishlist } = useWishlist()
  const wishlisted = isWishlisted(product.id)

  return (
    <div className="card flex flex-col">
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.main_image_url}
            alt={product.name}
            className="w-full h-48 object-cover rounded mb-3"
            loading="lazy"
          />
        </Link>
        <button
          onClick={() => toggleWishlist(product)}
          className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow hover:scale-110 transition-transform"
          title={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-colors ${wishlisted ? 'text-red-500' : 'text-gray-400'}`}
            viewBox="0 0 24 24"
            fill={wishlisted ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth={wishlisted ? 0 : 1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col flex-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm font-medium text-gray-800 line-clamp-2 hover:text-amazon-orange mb-1">
            {product.name}
          </h3>
        </Link>

        <p className="text-xs text-gray-500 mb-1">{product.category_name}</p>

        {product.avg_rating !== null && product.avg_rating !== undefined && product.review_count > 0 && (
          <StarRating rating={product.avg_rating} count={product.review_count} />
        )}

        <p className="text-lg font-bold text-gray-900 mt-auto mb-3">
          ₹{Number(product.price).toFixed(2)}
        </p>

        <p className={`text-xs mb-3 ${product.stock > 0 ? 'text-green-600' : 'text-red-500'}`}>
          {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
        </p>

        <button
          onClick={() => addToCart(product)}
          disabled={product.stock === 0}
          className="btn-primary w-full text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

