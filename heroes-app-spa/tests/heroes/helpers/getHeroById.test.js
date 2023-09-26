import { getHeroById } from '../../../src/heroes/helpers/getHeroById'

/* eslint-disable no-undef */
describe('Tests in getHeroById function', () => {
  const hero = {
    id: 'dc-green',
    superhero: 'Green Lantern',
    publisher: 'DC Comics',
    alterEgo: 'Alan Scott',
    firstAppearance: 'All-American Comics #16',
    characters: 'Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz'
  }
  test('should return the Green Lantern hero', () => {
    const heroById = getHeroById('dc-green')
    expect(heroById).toEqual(hero)
  })
  test('should return undefined in case is searched an invalid id', () => {
    const heroById = getHeroById('dc-some')
    expect(heroById).toBe(undefined)
  })
})
