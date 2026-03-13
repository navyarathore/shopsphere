import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import api from '../services/api'
import type { User } from '../types'

interface AuthContextType {
  user: User | null
  loading: boolean
  signup: (name: string, email: string, password: string) => Promise<void>
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  // Restore session on mount by calling /api/auth/me (reads httpOnly cookie)
  useEffect(() => {
    api.get<{ user: User }>('/api/auth/me')
      .then((res) => setUser(res.data.user))
      .catch(() => setUser(null))
      .finally(() => setLoading(false))
  }, [])

  const signup = async (name: string, email: string, password: string) => {
    const res = await api.post<{ user: User }>('/api/auth/signup', { name, email, password })
    setUser(res.data.user)
  }

  const login = async (email: string, password: string) => {
    const res = await api.post<{ user: User }>('/api/auth/login', { email, password })
    setUser(res.data.user)
  }

  const logout = async () => {
    await api.post('/api/auth/logout')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextType {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}
