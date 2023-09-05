import { render, screen } from '@testing-library/react'
import { PublicRoute } from '../../src/router/PublicRoute'
import { AuthContext } from '../../src/auth/context/AuthProvider'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
/* eslint-disable no-undef */

describe('Tests in Public Route component', () => {
  test('should show children if not authenticated', () => {
    const loggedValue = { logged: false }
    render(
      <AuthContext.Provider value={{ user: loggedValue }}>
        <PublicRoute>
          <h1>Public route</h1>
        </PublicRoute>
      </AuthContext.Provider>
    )
    expect(screen.getByText('Public route')).toBeTruthy()
  })
  test('should navigate if authenticated', () => {
    const loggedValue = { logged: true, username: 'CH' }
    render(
      <AuthContext.Provider value={{ user: loggedValue }}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route
              path='/' element={
                <PublicRoute>
                  <h1>Public route</h1>
                </PublicRoute>
              }
            />
            <Route path='heroes' element={<h1>Heroes page</h1>} />
          </Routes>

        </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(screen.getByText('Heroes page')).toBeTruthy()
  })
})
