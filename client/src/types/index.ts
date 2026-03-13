// ── Auth ─────────────────────────────────────────────────────────────────────

export interface User {
  id: number
  name: string
  email: string
}

// ── Category ─────────────────────────────────────────────────────────────────

export interface Category {
  id: number
  name: string
}

// ── Product ──────────────────────────────────────────────────────────────────

export interface Product {
  id: number
  name: string
  price: number | string
  stock: number
  main_image_url: string
  category_id: number
  category_name: string
  avg_rating: number | null
  review_count: number
}

export interface ProductImage {
  id: number
  image_url: string
}

export interface ProductSpecification {
  spec_key: string
  spec_value: string
}

export interface ProductAdditionalInfo {
  info_key: string
  info_value: string
}

export interface ProductReview {
  id: number
  reviewer_name: string
  rating: number
  title: string
  review_text: string
  verified_purchase: boolean
  review_date: string
  helpful_count: number
}

export interface ProductDetail extends Product {
  description: string
  images: ProductImage[]
  specifications: ProductSpecification[]
  additionalInfo: ProductAdditionalInfo[]
  reviews: ProductReview[]
  relatedProducts: Product[]
}

// ── Cart ─────────────────────────────────────────────────────────────────────

export interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

// ── Wishlist ─────────────────────────────────────────────────────────────────

export interface WishlistItem {
  id: number
  name: string
  price: number
  image: string
  category_name: string
  stock: number
}

// ── Order ────────────────────────────────────────────────────────────────────

export interface ShippingAddress {
  name: string
  addressLine1: string
  addressLine2: string
  city: string
  state: string
  pincode: string
  phone: string
}

export interface OrderItem {
  id: number
  product_id: number
  quantity: number
  price_at_purchase: number | string
  name: string
  main_image_url: string
}

export interface Order {
  id: number
  user_id: number
  total_amount: number | string
  shipping_name: string
  shipping_address_line1: string
  shipping_address_line2?: string
  city: string
  state: string
  pincode: string
  phone: string
  created_at: string
  items: OrderItem[]
}

export interface OrderSummary {
  id: number
  total_amount: number | string
  shipping_name: string
  city: string
  state: string
  created_at: string
}

// ── Navigation constants ──────────────────────────────────────────────────────

export interface CategoryNavItem {
  label: string
  query: string
  icon: string
  hasProducts: boolean
}
