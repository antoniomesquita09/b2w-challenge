import React from 'react'
import { render } from '@testing-library/react'

import Search from './index.js'

describe('<Search />', () => {
  it('Snapshot testing', () => {
    const { asFragment } = render(<Search />)

    expect(asFragment()).toMatchSnapshot()
  })
})
