import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartItem from '../components/cart/CartItem'

export default function CartPage() {
  const { cartItems, cartSubtotal } = useCart()
  const navigate = useNavigate()

  if (cartItems.length === 0) {
    return (
      <div className="container-main py-16 text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Your Shopping Cart is empty
        </h1>
        <p className="text-gray-500 mb-6">
          Looks like you haven't added anything yet.
        </p>
        <Link to="/" className="btn-primary px-8 py-3">
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="container-main py-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        Shopping Cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cart items */}
        <div className="flex-1 space-y-4">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        {/* Summary */}
        <div className="lg:w-72 flex-shrink-0">
          <div className="card sticky top-20">
            <p className="text-lg font-medium text-gray-800 mb-4">
              Subtotal ({cartItems.reduce((s, i) => s + i.quantity, 0)} items):{' '}
              <span className="font-bold">₹{cartSubtotal.toFixed(2)}</span>
            </p>
            <button
              onClick={() => navigate('/checkout')}
              className="btn-primary w-full py-3 text-base"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
