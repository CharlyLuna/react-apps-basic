import { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthProvider'

export const Navbar = () => {
  const navigate = useNavigate()
  const { user, handleLogout } = useContext(AuthContext)

  const onLogOut = () => {
    handleLogout()
    navigate('/login', {
      replace: true
    })
  }

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2'>

      <Link
        className='navbar-brand'
        to='/heroes'
      >
        Asociaciones
      </Link>
      <div>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
      </div>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <div className='navbar-nav'>
          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
            to='marvel'
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
            to='dc'
          >
            DC
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
            to='search'
          >
            Search
          </NavLink>
        </div>
        <div className='d-flex flex-fill justify-content-sm-end'>
          <ul className='navbar-nav ml-auto'>
            <span className='nav-item nav-link'>
              <b>{user?.username}</b>
            </span>
            <button onClick={onLogOut} className='nav-item nav-link btn'>Log out</button>
          </ul>
        </div>
      </div>
    </nav>
  )
}
