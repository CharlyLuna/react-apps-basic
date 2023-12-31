import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import queryString from 'query-string'
import { HeroCard } from '../components/HeroCard'
import { useMemo, useRef } from 'react'
import { getHeroesByName } from '../helpers'

export const SearchPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { q = '' } = queryString.parse(location.search)
  const heroes = useMemo(() => getHeroesByName(q), [q])
  const { heroName, onInputChange } = useForm({ heroName: q })
  const prevSearch = useRef(heroName)

  const showSearch = q.length === 0
  const showError = (q.length > 0) && heroes.length === 0

  const handleSubmit = (e) => {
    e.preventDefault()
    if (prevSearch.current === heroName) return
    prevSearch.current = heroName

    navigate(`?q=${heroName}`)
  }

  return (
    <>
      <h1>Search</h1>
      <div className='row'>
        <div className='col-md-5'>
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
        <div className='col-md-7 mt-4 mt-md-0'>
          <h4>Results</h4>
          <div
            className='alert alert-primary animate__animated animate__fadeIn'
            style={{ display: showSearch ? '' : 'none' }}
          >
            Search a hero
          </div>
          <div
            data-testid='error-message'
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
