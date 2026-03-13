import { Link } from 'react-router-dom'
import { useWishlist } from '../context/WishlistContext'
import { useCart } from '../context/CartContext'

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()

  const handleMoveToCart = (item) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      main_image_url: item.image,
      stock: item.stock,
    })
    removeFromWishlist(item.id)
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Your Wishlist</h1>
      <p className="text-gray-500 mb-6">
        {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'}
      </p>

      {wishlistItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-gray-300 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
            />
          </svg>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Your wishlist is empty</h2>
          <p className="text-gray-500 mb-6">Save items you love and come back to them anytime.</p>
          <Link to="/" className="btn-primary px-8">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {wishlistItems.map((item) => (
            <div key={item.id} className="card flex flex-col relative group">
              {/* Remove button */}
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="absolute top-2 right-2 z-10 p-1.5 bg-white rounded-full shadow hover:bg-red-50 transition-colors"
                title="Remove from wishlist"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
              </button>

              <Link to={`/product/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded mb-3"
                  loading="lazy"
                />
              </Link>

              <div className="flex flex-col flex-1">
                <Link to={`/product/${item.id}`}>
                  <h3 className="text-sm font-medium text-gray-800 line-clamp-2 hover:text-amazon-orange mb-1">
                    {item.name}
                  </h3>
                </Link>

                {item.category_name && (
                  <p className="text-xs text-gray-500 mb-1">{item.category_name}</p>
                )}

                <p className="text-lg font-bold text-gray-900 mt-auto mb-3">
                  ${item.price.toFixed(2)}
                </p>

                <p className={`text-xs mb-3 ${item.stock > 0 ? 'text-green-600' : 'text-red-500'}`}>
                  {item.stock > 0 ? 'In Stock' : 'Out of Stock'}
                </p>

                <button
                  onClick={() => handleMoveToCart(item)}
                  disabled={item.stock === 0}
                  className="btn-primary w-full text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Move to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
