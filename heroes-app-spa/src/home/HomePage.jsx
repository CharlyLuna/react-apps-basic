import { useNavigate } from 'react-router-dom'
import './HomePage.css'
import { AuthContext } from '../auth/context/AuthProvider'
import { useContext, useState } from 'react'
import { useForm } from '../hooks/useForm'

export const HomePage = () => {
  const [showLogin, setShowLogin] = useState(false)
  const navigate = useNavigate()
  const { handleLogin } = useContext(AuthContext)
  const { username, onInputChange } = useForm({ username: '' })

  const handleSubmit = (event) => {
    event.preventDefault()
    const lastPath = window.localStorage.getItem('lastPath') || '/heroes'
    handleLogin(username)
    navigate(lastPath, {
      replace: true
    })
  }

  return (
    <main className='hero-section'>
      <div className='hero-info'>
        <div className='hero-box text-center'>
          <h1 className='fs-1'>Heroes App</h1>
          <p className=''>App to check heroes information. Just create a username and start using the app.</p>
          <button className={`btn btn-dark fs-5 mb-2 ${showLogin ? 'disabled' : ''}`} type='button' onClick={() => setShowLogin(true)}>Create username</button>
        </div>
        {
          showLogin && (
            <form className=' text-center text-md-start animate__animated animate__fadeIn' onSubmit={handleSubmit}>
              <div className='login-action'>
                <input placeholder='username123' type='text' name='username' value={username} onChange={onInputChange} required />
                <button className='btn btn-dark' type='submit'>Start</button>
              </div>
            </form>
          )
        }
      </div>
    </main>
  )
}
