import { useContext, useEffect } from 'react'
import { AuthContext } from '../auth/context/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {
  const { user: { logged } } = useContext(AuthContext)
  const { pathname, search } = useLocation()
  const lastPath = `${pathname}${search}`
  useEffect(() => {
    window.localStorage.setItem('lastPath', lastPath)
  }, [pathname, search])

  return logged ? children : <Navigate to='/login' replace />
}
