import React from 'react'
import { render } from '@testing-library/react'

import Paginator from './index.js'

describe('<Paginator />', () => {
  it('Snapshot testing', () => {
    const { asFragment } = render(<Paginator />)

    expect(asFragment()).toMatchSnapshot()
  })
})
