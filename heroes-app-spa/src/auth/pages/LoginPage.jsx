import { useNavigate } from 'react-router-dom'
import './LoginPage.css'

export const LoginPage = () => {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/heroes', {
      replace: true
    })
  }
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input type='text' name='username' />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' />
        <button className='btn btn-dark' type='submit'>Log in</button>
      </form>
    </main>
  )
}
