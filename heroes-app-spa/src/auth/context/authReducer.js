import { types } from '../types/types'

export const authInitialState = {
  logged: false,
  username: null
}

export const authReducer = (state, action) => {
  switch (action.type) {
    case types.login: {
      const newState = {
        ...state,
        logged: true,
        username: action.payload
      }

      return newState
    }
    case types.logout: {
      const newState = {
        logged: false,
        username: null
      }
      return newState
    }
    default:
      return state
  }
}
