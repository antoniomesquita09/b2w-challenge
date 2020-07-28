import React from 'react'
import { useSelector } from 'react-redux'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'

import Home from './index.js'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}))

describe('<Home />', () => {
  beforeEach(() => {
    useSelector.mockImplementation((cb) =>
      cb({
        pokemons: {
          allPokemons: [
            {
              id: 1,
              name: 'pikachu',
              price: 12,
            },
          ],
        },
        cart: {
          cart: [
            {
              id: 1,
              name: 'pikachu',
              price: 12,
            },
          ],
          total: 12,
        },
      })
    )
  })

  afterEach(() => {
    useSelector.mockClear()
  })

  it('Snapshot testing Home', () => {
    const { asFragment } = render(
      <Router>
        <Home />
      </Router>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
