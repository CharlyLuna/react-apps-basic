import { createContext, useReducer } from 'react'
import { authInitialState, authReducer } from './AuthReducer'
import { types } from '../types/types'

export const AuthContext = createContext()

const init = () => JSON.parse(window.localStorage.getItem('user')) || authInitialState

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState, init)

  const handleLogin = (username) => {
    dispatch({
      type: types.login,
      payload: username
    })
  }

  const handleLogout = () => {
    window.localStorage.removeItem('user')
    dispatch({
      type: types.logout
    })
  }

  return (
    <AuthContext.Provider value={{ handleLogin, handleLogout, user: state }}>
      {children}
    </AuthContext.Provider>
  )
}
