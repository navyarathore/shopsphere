import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import type { WishlistItem, Product } from '../types'

interface WishlistContextType {
  wishlistItems: WishlistItem[]
  addToWishlist: (product: Product) => void
  removeFromWishlist: (productId: number) => void
  isWishlisted: (productId: number) => boolean
  toggleWishlist: (product: Product) => void
  wishlistCount: number
}

const WishlistContext = createContext<WishlistContextType | null>(null)

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(() => {
    try {
      const stored = localStorage.getItem('shopsphere_wishlist')
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('shopsphere_wishlist', JSON.stringify(wishlistItems))
  }, [wishlistItems])

  const addToWishlist = (product: Product) => {
    setWishlistItems((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: Number(product.price),
          image: product.main_image_url,
          category_name: product.category_name,
          stock: product.stock,
        },
      ]
    })
  }

  const removeFromWishlist = (productId: number) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== productId))
  }

  const isWishlisted = (productId: number): boolean => wishlistItems.some((item) => item.id === productId)

  const toggleWishlist = (product: Product) => {
    if (isWishlisted(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  const wishlistCount = wishlistItems.length

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isWishlisted,
        toggleWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist(): WishlistContextType {
  const ctx = useContext(WishlistContext)
  if (!ctx) throw new Error('useWishlist must be used within WishlistProvider')
  return ctx
}
