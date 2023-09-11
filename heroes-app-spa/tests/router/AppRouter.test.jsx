import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../src/auth/context/AuthProvider'
import { AppRouter } from '../../src/router/AppRouter'

/* eslint-disable no-undef */
describe('Tests in AppRouter component', () => {
  test('should show the home page if not authenticated', () => {
    const loggedStatus = { logged: false }
    render(
      <AuthContext.Provider value={{ user: loggedStatus }}>
        <MemoryRouter initialEntries={['/heroes']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(screen.getByText('Create username')).toBeTruthy()
  })
  test('should show the Marvel component when authenticated', () => {
    const loggedStatus = { logged: true, username: 'CH' }
    render(
      <AuthContext.Provider value={{ user: loggedStatus }}>
        <MemoryRouter initialEntries={['/']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(screen.getByText('Marvel Comics')).toBeTruthy()
  })
})
