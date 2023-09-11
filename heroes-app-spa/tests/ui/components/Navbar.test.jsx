const { render, screen, fireEvent } = require('@testing-library/react')
const { Navbar } = require('../../../src/ui/components/Navbar')
const { AuthContext } = require('../../../src/auth/context/AuthProvider')
const { MemoryRouter } = require('react-router-dom')
/* eslint-disable no-undef */

const mockedUseNavigate = jest.fn()
// Mock only the useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}))

describe('Tests in Navbar component', () => {
  const loggedStatus = { logged: true, username: 'CH' }
  const logOutFunc = jest.fn()
  beforeEach(() => jest.clearAllMocks())

  test('should show the username from the context', () => {
    render(
      <AuthContext.Provider value={{ user: loggedStatus }}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(screen.getByText('CH')).toBeTruthy()
  })
  test('should call the logout function and navigate when clicked the logout button', () => {
    render(
      <AuthContext.Provider value={{ user: loggedStatus, handleLogout: logOutFunc }}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    )
    const logOutButton = screen.getByRole('button', { name: 'Log out' })
    fireEvent.click(logOutButton)
    expect(logOutFunc).toHaveBeenCalled()
    expect(mockedUseNavigate).toHaveBeenCalledWith('/', { replace: true })
  })
})
