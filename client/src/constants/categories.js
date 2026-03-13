export const AVAILABLE_CATEGORY_NAMES = [
  'Electronics',
  'Books',
  'Clothing',
  'Home & Kitchen',
  'Sports & Outdoors',
]

export const CATEGORY_NAV_ITEMS = [
  { label: 'Fresh', query: 'Fresh', icon: '🥦', hasProducts: false },
  { label: 'Bestsellers', query: 'Bestsellers', icon: '🏆', hasProducts: false },
  { label: 'Mobiles', query: 'Mobiles', icon: '📱', hasProducts: false },
  { label: 'Customer Service', query: 'Customer Service', icon: '🎧', hasProducts: false },
//   { label: "Today's Deals", query: "Today's Deals", icon: '🏷️', hasProducts: false },
  { label: 'Electronics', query: 'Electronics', icon: '💻', hasProducts: true },
  { label: 'Clothing', query: 'Clothing', icon: '👗', hasProducts: true },
  { label: 'Home & Kitchen', query: 'Home & Kitchen', icon: '🏠', hasProducts: true },
  { label: 'Sports & Outdoors', query: 'Sports & Outdoors', icon: '🏃', hasProducts: true },
  { label: 'Toys & Games', query: 'Toys & Games', icon: '🧸', hasProducts: false },
  { label: 'Computers', query: 'Computers', icon: '🖥️', hasProducts: false },
  { label: 'Books', query: 'Books', icon: '📚', hasProducts: true },
  { label: 'Gift Cards', query: 'Gift Cards', icon: '🎁', hasProducts: false },
]

export const SEARCH_CATEGORIES = ['All', ...CATEGORY_NAV_ITEMS.map((item) => item.query)]
