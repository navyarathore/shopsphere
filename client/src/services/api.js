import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000',
  withCredentials: true,
})

// --- Token refresh interceptor ---
let isRefreshing = false
let failedQueue = []

const processQueue = (error) => {
  failedQueue.forEach((prom) => (error ? prom.reject(error) : prom.resolve()))
  failedQueue = []
}

const SKIP_REFRESH_URLS = ['/api/auth/refresh', '/api/auth/login', '/api/auth/signup']

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const original = error.config
    const isAuthUrl = SKIP_REFRESH_URLS.some((u) => original.url?.includes(u))

    if (error.response?.status === 401 && !original._retry && !isAuthUrl) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject })
        })
          .then(() => api(original))
          .catch((err) => Promise.reject(err))
      }

      original._retry = true
      isRefreshing = true

      try {
        await api.post('/api/auth/refresh')
        processQueue(null)
        return api(original)
      } catch (refreshError) {
        processQueue(refreshError)
        return Promise.reject(refreshError)
      } finally {
        isRefreshing = false
      }
    }

    return Promise.reject(error)
  }
)

export default api
