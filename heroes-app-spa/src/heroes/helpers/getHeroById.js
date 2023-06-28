import { heroes } from '../mocks/heroes'

export const getHeroById = (id) => {
  console.log('getHeroById Activated')
  return heroes.find(hero => hero.id === id)
}
