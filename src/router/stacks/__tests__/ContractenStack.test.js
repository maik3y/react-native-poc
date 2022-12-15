import * as React from 'react'
import { render, screen } from '../../../utils/test-utils'

import { NavigationContainer } from '@react-navigation/native'
import ContractsScreenStack from '../ContractenStack'

describe('ContractenStack', () => {
  test('Should render', () => {
    render(
      <NavigationContainer>
        <ContractsScreenStack />
      </NavigationContainer>
    )
    expect(screen.toJSON()).toMatchSnapshot()
  })
})
