import type { ShippingAddress } from '../../types'

interface AddressFormErrors {
  [key: string]: string | undefined
}

interface AddressFormProps {
  values: ShippingAddress
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  errors: AddressFormErrors
}

export default function AddressForm({ values, onChange, errors }: AddressFormProps) {
  const field = (
    name: keyof ShippingAddress,
    label: string,
    placeholder: string,
    required = true,
    type = 'text'
  ) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={values[name] || ''}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amazon-yellow ${
          errors[name] ? 'border-red-400' : 'border-gray-300'
        }`}
      />
      {errors[name] && (
        <p className="text-xs text-red-500 mt-1">{errors[name]}</p>
      )}
    </div>
  )

  return (
    <div className="space-y-4">
      {field('name', 'Full Name', 'John Doe')}
      {field('addressLine1', 'Address Line 1', '123 Main Street')}
      {field('addressLine2', 'Address Line 2', 'Apt 4B (optional)', false)}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {field('city', 'City', 'New York')}
        {field('state', 'State', 'NY')}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {field('pincode', 'PIN / ZIP Code', '110001')}
        {field('phone', 'Phone Number', '9876543210', true, 'tel')}
      </div>
    </div>
  )
}
