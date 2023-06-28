export const HeroCard = ({
  id,
  superhero,
  publisher,
  alterEgo,
  firstAppearance,
  characters
}) => {
  const heroUrl = `/assets/heroes/${id}.jpg`

  return (
    <div className='col'>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-4'>
            <img className='card-img' src={heroUrl} alt={superhero} />
          </div>
          <div className='col-8'>
            <div className='card-body'>
              <h4 className='card-title'>{superhero}</h4>
              <p className='card-text'>{alterEgo}</p>
              {alterEgo !== characters ? <p>{characters}</p> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
