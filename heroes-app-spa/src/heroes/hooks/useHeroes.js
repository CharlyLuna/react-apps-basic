import { useEffect, useState } from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'

export const useHeroes = ({ publisher }) => {
  const [heroes, setHeroes] = useState([])
  useEffect(() => {
    const heroes = getHeroesByPublisher(publisher)
    setHeroes(heroes)
  }, [])

  return { heroes }
}
