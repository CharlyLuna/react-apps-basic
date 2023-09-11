/* eslint-disable no-undef */
import { types } from '../../../src/auth/types/types'

describe('Tests of types', () => {
  test('should return these types', () => {
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout'
    })
  })
})
