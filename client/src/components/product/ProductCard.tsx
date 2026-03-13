import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'
import type { Product } from '../../types'

interface ProductCardProps {
  product: Product
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
