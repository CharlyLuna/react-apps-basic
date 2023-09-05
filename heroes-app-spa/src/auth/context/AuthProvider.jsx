import { createContext, useReducer } from 'react'
import { authInitialState, authReducer } from './authReducer'
import { types } from '../types/types'

export const AuthContext = createContext()

const updateLocalStorage = (state) => {
  window.localStorage.setItem('user', JSON.stringify(state))
}

const init = () => JSON.parse(window.localStorage.getItem('user')) || authInitialState

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState, init)

  const handleLogin = (username) => {
    updateLocalStorage({ username, logged: true })
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
