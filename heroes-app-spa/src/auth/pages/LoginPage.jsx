import { useNavigate } from 'react-router-dom'
import './LoginPage.css'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useForm } from '../../hooks/useForm'

export const LoginPage = () => {
  const navigate = useNavigate()
  const { handleLogin } = useContext(AuthContext)
  const { username, password, onInputChange } = useForm({
    username: '',
    password: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    const lastPath = window.localStorage.getItem('lastPath') || '/heroes'
    handleLogin(username)
    navigate(lastPath, {
      replace: true
    })
  }
  return (
    <main>
      <form className='log-in' onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input type='text' name='username' value={username} onChange={onInputChange} required />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' value={password} onChange={onInputChange} required />
        <button className='btn btn-dark' type='submit'>Log in</button>
      </form>
    </main>
  )
}
