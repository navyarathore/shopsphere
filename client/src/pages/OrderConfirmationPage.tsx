import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import api from '../services/api'
import type { Order } from '../types'

export default function OrderConfirmationPage() {
  const { orderId } = useParams<{ orderId: string }>()
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    api.get(`/api/orders/${orderId}`)
      .then((res) => setOrder(res.data))
      .catch((err) => setError(err.response?.data?.error || err.message))
      .finally(() => setLoading(false))
  }, [orderId])

  if (loading) {
    return (
      <div className="container-main py-8 text-center">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-amazon-yellow border-t-transparent mx-auto" />
        <p className="mt-4 text-gray-600">Loading order details…</p>
      </div>
    )
  }

  if (error || !order) {
    return (
      <div className="container-main py-8 text-center text-red-500">
        <p className="text-lg font-medium">{error || 'Order not found'}</p>
        <Link to="/" className="btn-primary mt-4 inline-block">
          Return to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="container-main py-8">
      <div className="max-w-2xl mx-auto">
        {/* Success banner */}
        <div className="bg-green-50 border border-green-300 rounded-md p-5 mb-6 text-center">
          <div className="text-4xl mb-2">✅</div>
          <h1 className="text-2xl font-bold text-green-800">
            Order Placed Successfully!
          </h1>
          <p className="text-green-700 mt-1">
            Order ID:{' '}
            <span className="font-mono font-bold">#{order.id}</span>
          </p>
          <p className="text-sm text-green-600 mt-1">
            Placed on{' '}
            {new Date(order.created_at).toLocaleString(undefined, {
              dateStyle: 'long',
              timeStyle: 'short',
            })}
          </p>
        </div>

        {/* Shipping address */}
        <div className="card mb-4">
          <h2 className="font-semibold text-gray-800 mb-3">
            Shipping Address
          </h2>
          <p className="text-sm text-gray-700">{order.shipping_name}</p>
          <p className="text-sm text-gray-700">{order.shipping_address_line1}</p>
          {order.shipping_address_line2 && (
            <p className="text-sm text-gray-700">{order.shipping_address_line2}</p>
          )}
          <p className="text-sm text-gray-700">
            {order.city}, {order.state} – {order.pincode}
          </p>
          <p className="text-sm text-gray-700">📞 {order.phone}</p>
        </div>

        {/* Order items */}
        <div className="card mb-4">
          <h2 className="font-semibold text-gray-800 mb-3">Items Ordered</h2>
          <ul className="divide-y divide-gray-100">
            {order.items.map((item) => (
              <li key={item.id} className="py-3 flex items-center gap-3">
                <img
                  src={item.main_image_url}
                  alt={item.name}
                  className="w-14 h-14 object-cover rounded"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 line-clamp-1">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    Qty: {item.quantity} × ₹{Number(item.price_at_purchase).toFixed(2)}
                  </p>
                </div>
                <p className="text-sm font-semibold text-gray-800 flex-shrink-0">
                  ₹{(Number(item.price_at_purchase) * item.quantity).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>

          <div className="border-t border-gray-200 mt-3 pt-3 flex justify-between font-bold text-gray-900">
            <span>Order Total</span>
            <span>₹{Number(order.total_amount).toFixed(2)}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <Link to="/" className="btn-primary flex-1 text-center py-3">
            Continue Shopping
          </Link>
          <Link to="/orders" className="btn-secondary flex-1 text-center py-3">
            View All Orders
          </Link>
        </div>
      </div>
    </div>
  )
}
