import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../services/api'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import ProductCard from '../components/product/ProductCard'

export default function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart, clearCart } = useCart()
  const { isWishlisted, toggleWishlist } = useWishlist()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [qty, setQty] = useState(1)

  useEffect(() => {
    setLoading(true)
    setError(null)
    setSelectedImageIndex(0)

    api.get(`/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => setError(err.response?.data?.error || err.message))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <div className="container-main py-8">
        <div className="bg-white rounded-md shadow p-6 animate-pulse flex gap-8">
          <div className="bg-gray-200 w-80 h-80 rounded flex-shrink-0" />
          <div className="flex-1 space-y-4">
            <div className="bg-gray-200 h-6 rounded w-3/4" />
            <div className="bg-gray-200 h-4 rounded w-1/4" />
            <div className="bg-gray-200 h-24 rounded" />
            <div className="bg-gray-200 h-10 rounded w-40" />
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container-main py-8 text-center text-red-500">
        <p className="text-lg font-medium">{error}</p>
        <button onClick={() => navigate(-1)} className="btn-secondary mt-4">
          Go back
        </button>
      </div>
    )
  }

  if (!product) return null

  const allImages = [
    { image_url: product.main_image_url },
    ...(product.images || []),
  ]

  const handleAddToCart = () => {
    addToCart(product, qty)
  }

  const handleBuyNow = () => {
    clearCart()
    addToCart(product, qty)
    navigate('/checkout')
  }

  return (
    <div className="container-main py-8">
      {/* Main product section */}
      <div className="bg-white rounded-md shadow p-6 mb-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image carousel */}
          <div className="flex flex-col items-center gap-3 lg:w-96 flex-shrink-0">
            <img
              src={allImages[selectedImageIndex]?.image_url}
              alt={product.name}
              className="w-full max-w-sm h-80 object-cover rounded-md border border-gray-200"
            />
            {/* Thumbnails */}
            <div className="flex gap-2 flex-wrap justify-center">
              {allImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImageIndex(i)}
                  className={`w-14 h-14 rounded border-2 overflow-hidden transition-colors ${
                    selectedImageIndex === i
                      ? 'border-amazon-orange'
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <img
                    src={img.image_url}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex-1">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              {product.name}
            </h1>
            <p className="text-sm text-gray-500 mb-4">{product.category_name}</p>

            <p className="text-3xl font-bold text-gray-900 mb-4">
              ${Number(product.price).toFixed(2)}
            </p>

            <p
              className={`text-sm font-medium mb-4 ${
                product.stock > 0 ? 'text-green-600' : 'text-red-500'
              }`}
            >
              {product.stock > 0
                ? `In Stock (${product.stock} available)`
                : 'Out of Stock'}
            </p>

            {product.description && (
              <div className="mb-6">
                <h2 className="text-sm font-semibold text-gray-700 mb-1 uppercase tracking-wide">
                  About this item
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {/* Qty selector */}
            <div className="flex items-center gap-3 mb-4">
              <label className="text-sm font-medium text-gray-700">Qty:</label>
              <select
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                className="border border-gray-300 rounded px-2 py-1 text-sm"
                disabled={product.stock === 0}
              >
                {Array.from(
                  { length: Math.min(product.stock, 10) },
                  (_, i) => i + 1
                ).map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="btn-primary flex-1 py-3 text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                disabled={product.stock === 0}
                className="bg-orange-400 hover:bg-orange-500 text-white font-medium py-3 px-6 rounded shadow-sm transition-colors flex-1 text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Buy Now
              </button>
              <button
                onClick={() => toggleWishlist(product)}
                className={`flex items-center justify-center gap-2 border-2 rounded py-3 px-5 font-medium transition-colors flex-shrink-0 ${
                  isWishlisted(product.id)
                    ? 'border-red-400 text-red-500 bg-red-50 hover:bg-red-100'
                    : 'border-gray-300 text-gray-600 hover:border-red-300 hover:text-red-400'
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill={isWishlisted(product.id) ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  strokeWidth={isWishlisted(product.id) ? 0 : 1.8}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
                {isWishlisted(product.id) ? 'Wishlisted' : 'Wishlist'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Details & Additional Information */}
      {(product.specifications?.length > 0 || product.additionalInfo?.length > 0) && (
        <div className="bg-white rounded-md shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Product Information
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Technical Details */}
            {product.specifications?.length > 0 && (
              <div>
                <h3 className="text-base font-semibold text-gray-800 mb-3">
                  Technical Details
                </h3>
                <table className="w-full text-sm">
                  <tbody>
                    {product.specifications.map((spec, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? 'bg-gray-50' : ''}
                      >
                        <td className="py-2 px-3 font-medium text-gray-700 align-top w-1/3">
                          {spec.spec_key}
                        </td>
                        <td className="py-2 px-3 text-gray-600">
                          {spec.spec_value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Additional Information */}
            {product.additionalInfo?.length > 0 && (
              <div>
                <h3 className="text-base font-semibold text-gray-800 mb-3">
                  Additional Information
                </h3>
                <table className="w-full text-sm">
                  <tbody>
                    {product.additionalInfo.map((info, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? 'bg-gray-50' : ''}
                      >
                        <td className="py-2 px-3 font-medium text-gray-700 align-top w-1/3">
                          {info.info_key}
                        </td>
                        <td className="py-2 px-3 text-gray-600">
                          {info.info_value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Customer Reviews */}
      {product.reviews?.length > 0 && (
        <div className="bg-white rounded-md shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Customer Reviews
          </h2>

          <div className="space-y-6">
            {product.reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-gray-900">
                        {review.reviewer_name}
                      </span>
                      {review.verified_purchase && (
                        <span className="text-xs text-orange-600 font-medium">
                          Verified Purchase
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className={`w-4 h-4 ${
                              star <= review.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-gray-900">
                        {review.title}
                      </span>
                    </div>

                    <p className="text-sm text-gray-500 mb-2">
                      Reviewed on {new Date(review.review_date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>

                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                      {review.review_text}
                    </p>

                    {review.helpful_count > 0 && (
                      <p className="text-xs text-gray-500">
                        {review.helpful_count} {review.helpful_count === 1 ? 'person' : 'people'} found this helpful
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related Products */}
      {product.relatedProducts?.length > 0 && (
        <div className="bg-white rounded-md shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Products related to this item
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {product.relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
