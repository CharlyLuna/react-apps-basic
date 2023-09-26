import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { HeroPage } from '../../../src/heroes/pages/HeroPage'

/* eslint-disable no-undef */

const mockedUseNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}))

describe('Tests in Hero page component', () => {
  test('should show correctly the hero page for Batman', () => {
    render(
      <MemoryRouter initialEntries={['/hero/dc-batman']}>
        <Routes>
          <Route path='/hero/:id' element={<HeroPage />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('Batman')).toBeTruthy()
    expect(screen.getByRole('img').src).toContain('/heroes/dc-batman.webp')
  })
  test('should redirect to the marvel page when id param is invalid', () => {
    render(
      <MemoryRouter initialEntries={['/hero/something']}>
        <Routes>
          <Route path='/hero/:id' element={<HeroPage />} />
          <Route path='/heroes/marvel' element={<h1>Marvel Page</h1>} />
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByText('Marvel Page')).toBeTruthy()
  })
  test('should call the navigate func when clicked the back button', () => {
    render(
      <MemoryRouter initialEntries={['/hero/dc-batman']}>
        <Routes>
          <Route path='/hero/:id' element={<HeroPage />} />
        </Routes>
      </MemoryRouter>
    )
    const backButton = screen.getByRole('button')
    fireEvent.click(backButton)
    expect(mockedUseNavigate).toHaveBeenCalledWith(-1)
  })
})
