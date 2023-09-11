import { render, screen } from '@testing-library/react'
import { ProtectedRoute } from '../../src/router/ProtectedRoute'
import { AuthContext } from '../../src/auth/context/AuthProvider'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

/* eslint-disable no-undef */
describe('Tests in ProtectedRoute component', () => {
  test('should show the children when logged', () => {
    // To evaluate the localStorage you can override the method from the prototype
    Storage.prototype.setItem = jest.fn()

    const loggedStatus = { logged: true, username: 'CH' }
    render(
      <AuthContext.Provider value={{ user: loggedStatus }}>
        <MemoryRouter initialEntries={['/heroes']}>
          <ProtectedRoute>
            <h1>Protected Route</h1>
          </ProtectedRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(screen.getByText('Protected Route')).toBeTruthy()
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/heroes')
  })
  test('should navigate to the public route when you are not authenticated', () => {
    const loggedStatus = { logged: false }
    render(
      <AuthContext.Provider value={{ user: loggedStatus }}>
        <MemoryRouter initialEntries={['/heroes']}>
          <Routes>
            <Route
              path='/heroes' element={
                <ProtectedRoute>
                  <h1>Protected route</h1>
                </ProtectedRoute>
              }
            />
            <Route path='/' element={<h1>Public route</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(screen.getByText('Public route')).toBeTruthy()
  })
})
