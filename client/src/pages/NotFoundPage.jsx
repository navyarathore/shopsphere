import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="container-main py-20 text-center">
      <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
      <p className="text-xl font-semibold text-gray-700 mb-2">Page Not Found</p>
      <p className="text-gray-500 mb-8">
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="btn-primary px-8 py-3">
        Return to Home
      </Link>
    </div>
  )
}
