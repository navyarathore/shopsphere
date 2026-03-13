import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import AddressForm from '../components/checkout/AddressForm'
import api from '../services/api'
import type { ShippingAddress } from '../types'

const INITIAL_FORM: ShippingAddress = {
  name: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  pincode: '',
  phone: '',
}

function validateForm(values: ShippingAddress): Record<string, string> {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Full name is required'
  if (!values.addressLine1.trim()) errors.addressLine1 = 'Address is required'
  if (!values.city.trim()) errors.city = 'City is required'
  if (!values.state.trim()) errors.state = 'State is required'
  if (!values.pincode.trim()) errors.pincode = 'PIN code is required'
  else if (!/^\d{4,10}$/.test(values.pincode))
    errors.pincode = 'Enter a valid PIN code (4–10 digits)'
  if (!values.phone.trim()) errors.phone = 'Phone number is required'
  else if (!/^\d{7,15}$/.test(values.phone.replace(/[\s\-+()]/g, '')))
    errors.phone = 'Enter a valid phone number'
  return errors
}

export default function CheckoutPage() {
  const { cartItems, cartSubtotal, clearCart } = useCart()
  const navigate = useNavigate()

  const [form, setForm] = useState<ShippingAddress>(INITIAL_FORM)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [serverError, setServerError] = useState(null)

  // Redirect if cart is empty
  useEffect(() => {
    if (cartItems.length === 0) navigate('/cart')
  }, [cartItems, navigate])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async () => {
    const errors = validateForm(form)
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }

    setSubmitting(true)
    setServerError(null)

    const payload = {
      items: cartItems.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
      })),
      shipping: {
        name: form.name,
        addressLine1: form.addressLine1,
        addressLine2: form.addressLine2,
        city: form.city,
        state: form.state,
        pincode: form.pincode,
        phone: form.phone,
      },
    }

    try {
      const res = await api.post('/api/orders', payload)
      clearCart()
      navigate(`/order-confirmation/${res.data.orderId}`)
    } catch (err) {
      setServerError(
        err.response?.data?.error || 'Something went wrong. Please try again.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  if (cartItems.length === 0) return null

  return (
    <div className="container-main py-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Address form */}
        <div className="flex-1">
          <div className="card">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Shipping Address
            </h2>
            <AddressForm
              values={form}
              onChange={handleChange}
              errors={fieldErrors}
            />
          </div>

          {serverError && (
            <div className="mt-4 bg-red-50 border border-red-300 text-red-700 rounded p-3 text-sm">
              {serverError}
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="btn-primary w-full py-4 text-base mt-4 disabled:opacity-60"
          >
            {submitting ? 'Placing order…' : 'Place your order'}
          </button>
        </div>

        {/* Order summary */}
        <div className="lg:w-80 flex-shrink-0">
          <div className="card sticky top-20">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Order Summary
            </h2>

            <ul className="divide-y divide-gray-100 mb-4">
              {cartItems.map((item) => (
                <li key={item.id} className="py-2 flex justify-between text-sm">
                  <span className="text-gray-700 line-clamp-1 flex-1 mr-2">
                    {item.name}{' '}
                    <span className="text-gray-400">× {item.quantity}</span>
                  </span>
                  <span className="font-medium flex-shrink-0">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="border-t border-gray-200 pt-3 flex justify-between font-bold text-gray-900">
              <span>Order Total</span>
              <span>${cartSubtotal.toFixed(2)}</span>
            </div>

            <p className="text-xs text-gray-400 mt-2">
              Final total is calculated server-side.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
