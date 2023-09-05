import { authReducer } from '../../src/auth/context/authReducer'
import { types } from '../../src/auth/types/types'

/* eslint-disable no-undef */
describe('Tests on auth reducer', () => {
  const authInitialState = {
    logged: false,
    username: null
  }

  test('should return the default state', () => {
    const state = authReducer(authInitialState, {})
    expect(state).toBe(authInitialState)
  })
  test('should call login auth and set the username', () => {
    const action = { payload: 'CharlyLuna', type: types.login }
    const state = authReducer(authInitialState, action)

    expect(state).toEqual({ username: action.payload, logged: true })
  })
  test('should delete the username and change logged to false', () => {
    const state = { username: 'CharlyLuna', logged: true }
    const logOutAction = { type: types.logout }
    const newState = authReducer(state, logOutAction)

    expect(newState).toEqual(authInitialState)
  })
})
