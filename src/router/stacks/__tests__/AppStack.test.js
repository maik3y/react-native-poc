import * as React from 'react'
import { render, screen } from '../../../utils/test-utils'

import { NavigationContainer } from '@react-navigation/native'
import AppStack from '../AppStack'

describe('AppStack', () => {
  test('Should render', () => {
    render(
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    )
    expect(screen.toJSON()).toMatchSnapshot()
  })
})
