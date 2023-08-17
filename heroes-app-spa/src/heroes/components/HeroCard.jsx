import { Link } from 'react-router-dom'
import './HeroCard.css'

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alterEgo,
  firstAppearance,
  characters
}) => {
  const heroUrl = `/heroes/${id}.jpg`

  return (
    <div className='col mb-3 d-flex align-items-stretch animate__animated animate__fadeIn'>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-4'>
            <img className='card-img' src={heroUrl} alt={superhero} />
          </div>
          <div className='col-8'>
            <div className='card-body'>
              <h4 className='card-title'>{superhero}</h4>
              <p className='card-text'>{alterEgo}</p>
              {alterEgo !== characters && <p className='card-text'>{characters}</p>}
              <p className='card-text'>
                <small className='text-muted'>{firstAppearance}</small>
              </p>
              <Link to={`/heroes/hero/${id}`} aria-label={`More information about ${superhero}`}>
                More...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
