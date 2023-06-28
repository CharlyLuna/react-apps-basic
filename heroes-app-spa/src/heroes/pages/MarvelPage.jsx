import { useEffect, useState } from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { HeroesList } from '../components/HeroesList'

export const MarvelPage = () => {
  const [heroes, setHeroes] = useState([])
  useEffect(() => {
    const heroes = getHeroesByPublisher('Marvel Comics')
    setHeroes(heroes)
  }, [])

  return (
    <main>
      <h1>Marvel comics</h1>
      <HeroesList heroes={heroes} />
    </main>
  )
}
