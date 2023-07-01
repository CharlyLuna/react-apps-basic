import { types } from '../types/types'

export const authInitialState = {
  logged: false,
  username: null
}

export const updateLocalStorage = (state) => {
  window.localStorage.setItem('user', JSON.stringify(state))
}

export const authReducer = (state, action) => {
  switch (action.type) {
    case types.login: {
      const newState = {
        ...state,
        logged: true,
        username: action.payload
      }
      updateLocalStorage(newState)
      return newState
    }
    case types.logout: {
      const newState = {
        logged: false,
        username: null
      }
      // updateLocalStorage(newState)
      return newState
    }
    default:
      return state
  }
}
