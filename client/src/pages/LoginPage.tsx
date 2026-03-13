import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function LoginPage() {
  const { user, loading: authLoading, login } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(email, password)
      navigate('/')
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!authLoading && user) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-6">
          <Link to="/" className="text-2xl font-extrabold tracking-tight">
            Shop<span className="text-amazon-yellow">Sphere</span>
          </Link>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Sign in</h1>

          {error && (
            <div className="bg-red-50 border border-red-300 text-red-700 text-sm rounded px-4 py-3 mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-amazon-yellow focus:ring-1 focus:ring-amazon-yellow"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-amazon-yellow focus:ring-1 focus:ring-amazon-yellow"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-amazon-yellow hover:bg-amazon-orange text-gray-900 font-bold py-2 px-4 rounded text-sm transition-colors disabled:opacity-60"
            >
              {loading ? 'Signing in…' : 'Sign in'}
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4">
            By signing in you agree to ShopSphere&apos;s conditions of use.
          </p>
        </div>

        <div className="mt-4 text-center text-sm text-gray-600">
          New to ShopSphere?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline font-medium">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  )
}
