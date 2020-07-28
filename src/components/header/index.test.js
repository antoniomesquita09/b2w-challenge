import React from 'react'
import { render } from '@testing-library/react'

import Header from './index.js'

describe('<Header />', () => {
  it('Snapshot testing Header', () => {
    const { asFragment } = render(<Header />)

    expect(asFragment()).toMatchSnapshot()
  })
})
