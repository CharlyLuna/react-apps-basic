import { HeroesList } from '../components'
import { useHeroes } from '../hooks/useHeroes'

export const DCPage = () => {
  const { heroes } = useHeroes({ publisher: 'DC Comics' })
  return (
    <main>
      <h1>DC Comics</h1>
      <HeroesList heroes={heroes} />
    </main>
  )
}
