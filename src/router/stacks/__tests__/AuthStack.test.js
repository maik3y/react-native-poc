import * as React from 'react'
import { render, screen } from '../../../utils/test-utils'

import { NavigationContainer } from '@react-navigation/native'
import AuthStack from '../AuthStack'

describe('AuthStack', () => {
  test('Should render', () => {
    render(
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    )
    expect(screen.toJSON()).toMatchSnapshot()
  })
})
