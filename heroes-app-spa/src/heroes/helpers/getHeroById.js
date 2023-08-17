import { heroes } from '../mocks/heroes'

export const getHeroById = (id) => {
  return heroes.find(hero => hero.id === id)
}
