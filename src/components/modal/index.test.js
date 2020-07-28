import React from 'react'
import { render } from '@testing-library/react'

import Modal from './index.js'

describe('<Modal />', () => {
  it('Snapshot testing Modal', () => {
    const { asFragment } = render(<Modal />)

    expect(asFragment()).toMatchSnapshot()
  })
})
