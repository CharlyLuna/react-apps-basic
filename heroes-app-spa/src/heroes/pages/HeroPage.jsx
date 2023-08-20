import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById'
import { useMemo } from 'react'

export const HeroPage = () => {
  const { id } = useParams()
  const hero = useMemo(() => getHeroById(id), [id])
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  if (!hero) {
    return <Navigate to='/heroes/marvel' />
  }

  return (
    <div className='row mt-5'>
      <div className='col-4 animate__animated animate__fadeInLeft'>
        <img className='img-thumbnail' src={`/heroes/${id}.webp`} alt={hero.superhero} />
      </div>
      <div className='col-8 animate__animated animate__bounceInRight'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego: </b>{hero.alterEgo}</li>
          <li className='list-group-item'><b>Publisher: </b>{hero.publisher}</li>
          <li className='list-group-item'><b>First appearance: </b>{hero.firstAppearance}</li>
        </ul>
        <h4 className='mt-3'>Characters</h4>
        <p>{hero.characters}</p>
        <button className='btn btn-dark' onClick={handleBack}>Back</button>
      </div>
    </div>
  )
}
