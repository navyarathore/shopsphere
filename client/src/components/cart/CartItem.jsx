import { useCart } from '../../context/CartContext'

export default function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart()

  return (
    <div className="card flex gap-3 sm:gap-4 items-start">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded flex-shrink-0"
      />

      <div className="flex-1 min-w-0">
        <p className="font-medium text-gray-800 line-clamp-2">{item.name}</p>
        <p className="text-lg font-bold text-gray-900 mt-1">
          ${Number(item.price).toFixed(2)}
        </p>

        <div className="flex items-center gap-3 mt-3">
          <div className="flex items-center border border-gray-300 rounded">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="px-3 py-1 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              −
            </button>
            <span className="px-3 py-1 min-w-[2.5rem] text-center text-sm font-medium">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="px-3 py-1 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-sm text-red-500 hover:text-red-700 hover:underline"
          >
            Remove
          </button>
        </div>
      </div>

      <div className="text-right flex-shrink-0">
        <p className="font-semibold text-gray-800">
          ${(Number(item.price) * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  )
}
