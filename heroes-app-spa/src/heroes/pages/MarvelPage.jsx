import { HeroesList } from '../components'
import { useHeroes } from '../hooks/useHeroes'

export const MarvelPage = () => {
  const { heroes } = useHeroes({ publisher: 'Marvel Comics' })

  return (
    <main>
      <h1>Marvel Comics</h1>
      <HeroesList heroes={heroes} />
    </main>
  )
}
