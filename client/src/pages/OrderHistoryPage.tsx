import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'
import type { OrderSummary } from '../types'

export default function OrderHistoryPage() {
  const [orders, setOrders] = useState<OrderSummary[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    api.get('/api/orders', { params: { userId: 1 } })
      .then((res) => setOrders(res.data))
      .catch((err) => setError(err.response?.data?.error || err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="container-main py-8 text-center">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-amazon-yellow border-t-transparent mx-auto" />
        <p className="mt-4 text-gray-600">Loading orders…</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container-main py-8 text-center text-red-500">
        <p className="text-lg font-medium">{error}</p>
      </div>
    )
  }

  return (
    <div className="container-main py-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Your Orders</h1>

      {orders.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg font-medium">No orders yet</p>
          <Link to="/" className="btn-primary mt-4 inline-block px-6 py-2">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="card flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <div>
                <p className="font-semibold text-gray-800">
                  Order <span className="font-mono">#{order.id}</span>
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(order.created_at).toLocaleDateString(undefined, {
                    dateStyle: 'medium',
                  })}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {order.shipping_name} — {order.city}, {order.state}
                </p>
              </div>
              <div className="sm:text-right flex-shrink-0">
                <p className="font-bold text-gray-900 text-lg">
                  ${Number(order.total_amount).toFixed(2)}
                </p>
                <Link
                  to={`/order-confirmation/${order.id}`}
                  className="text-sm text-amazon-orange hover:underline"
                >
                  View details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
