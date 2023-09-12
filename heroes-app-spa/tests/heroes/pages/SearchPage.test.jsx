import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { SearchPage } from '../../../src/heroes/pages/SearchPage'
/* eslint-disable no-undef */

const mockedUseNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}))

describe('Tests in search page', () => {
  beforeEach(() => jest.clearAllMocks())
  test('should show correctly with the default values', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    )
    expect(container).toMatchSnapshot()
  })
  test('should show Batman card and the input with the querystring value', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    )
    // Check input and image to be what we searched
    const input = screen.getByRole('textbox')
    const img = screen.getByRole('img')
    expect(input.value).toBe('batman')
    expect(img.src).toContain('/heroes/dc-batman.webp')
    // Check that the not found message is not appearing
    const errorMessage = screen.getByTestId('error-message')
    expect(errorMessage.style.display).toBe('none')
  })
  test('should show an error if the hero is not found', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=b231']}>
        <SearchPage />
      </MemoryRouter>
    )
    const errorMessage = screen.getByTestId('error-message')
    expect(errorMessage.style.display).toBe('')
    expect(errorMessage.textContent).toBe('No results found for b231')
  })
  test('should call navigate to the new screen', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    )
    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')
    fireEvent.change(input, { target: { value: 'batman' } })
    fireEvent.click(button)
    expect(mockedUseNavigate).toHaveBeenCalledWith('?q=batman')
  })
})
