import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const navigate = useNavigate()
  return (
    <main>
      <h1>Welcome to Heroes app!</h1>
      <section>
        <p>Login to check the app</p>
        <button onClick={() => navigate('/login')}>Log in</button>
      </section>
    </main>
  )
}
