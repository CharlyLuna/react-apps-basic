import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import queryString from 'query-string'
import { HeroCard } from '../components/HeroCard'

export const SearchPage = () => {
  const navigate = useNavigate()
  const { heroName, onInputChange } = useForm({
    heroName: ''
  })
  const location = useLocation()
  const { q = '' } = queryString.parse(location.search)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (heroName.startsWith(' ') || heroName.length < 1) return
    navigate(`?q=${heroName}`)
  }

  return (
    <>
      <h1>Search</h1>
      <div className='row'>
        <div className='col-5'>
          <h4>Search a hero by name</h4>
          <form className='hero-search' onSubmit={handleSubmit}>
            <label htmlFor='heroName' />
            <input
              type='text'
              name='heroName'
              value={heroName}
              autoComplete='off'
              onChange={onInputChange}
            />
            <button className='btn btn-dark mt-2'>Search</button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          {
            !q && (
              <div className='alert alert-primary'>
                Search a hero
              </div>
            )
          }
          <div className='alert alert-danger'>
            No results found for <b>{q}</b>
          </div>

        </div>
      </div>
    </>
  )
}
