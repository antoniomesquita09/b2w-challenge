import React from 'react'
import { useSelector } from 'react-redux'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import Cart from './index.js'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}))

describe('<Cart />', () => {
  beforeEach(() => {
    useSelector.mockImplementation((cb) =>
      cb({
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

  it('Should be able to render the Cart', () => {
    const { getByTestId, getByText } = render(<Cart />)

    expect(getByTestId('pokemon-name')).toContainElement(getByText('pikachu'))
  })
})
