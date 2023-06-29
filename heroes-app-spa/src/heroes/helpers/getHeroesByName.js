import { heroes } from '../mocks/heroes'
export const getHeroesByName = (name = '') => {
  console.log('Hello from heroes by name')
  name = name.toLocaleLowerCase().trim()
  if (name.length < 1) return
  return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name))
}
