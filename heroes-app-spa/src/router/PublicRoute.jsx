import { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthProvider'
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({ children }) => {
  const { user: { logged } } = useContext(AuthContext)
  return logged ? <Navigate to='/heroes' /> : children
}
