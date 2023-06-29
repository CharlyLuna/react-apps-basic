import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import queryString from 'query-string'
import { HeroCard } from '../components/HeroCard'
import { useMemo } from 'react'
import { getHeroesByName } from '../helpers'

export const SearchPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { q = '' } = queryString.parse(location.search)
  const heroes = useMemo(() => getHeroesByName(q), [q])
  const { heroName, onInputChange } = useForm({ heroName: q })

  const showSearch = q.length === 0
  const showError = (q.length > 0) && heroes.length === 0

  const handleSubmit = (e) => {
    e.preventDefault()

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
          <div
            className='alert alert-primary animate__animated animate__fadeIn'
            style={{ display: showSearch ? '' : 'none' }}
          >
            Search a hero
          </div>
          <div
            className='alert alert-danger animate__animated animate__fadeIn'
            style={{ display: showError ? '' : 'none' }}
          >
            No results found for <b>{q}</b>
          </div>

          {
            heroes?.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </>
  )
}
