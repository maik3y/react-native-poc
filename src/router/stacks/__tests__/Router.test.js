import * as React from 'react'
import { render, screen } from '../../../utils/test-utils'

import Router from '../../Router'

describe('Router', () => {
  test('Should render AuthStack', () => {
    render(<Router />)
    expect(screen.toJSON()).toMatchSnapshot()
  })
})
