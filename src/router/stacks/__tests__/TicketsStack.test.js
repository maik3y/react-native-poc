import * as React from 'react'
import { render, screen } from '../../../utils/test-utils'

import { NavigationContainer } from '@react-navigation/native'
import TicketsScreenStack from '../TicketsStack'

describe('TicketsStack', () => {
  test('Should render', () => {
    render(
      <NavigationContainer>
        <TicketsScreenStack />
      </NavigationContainer>
    )
    expect(screen.toJSON()).toMatchSnapshot()
  })
})
