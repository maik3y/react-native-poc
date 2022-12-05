import React from 'react'
import renderer from 'react-test-renderer'
import ContractBlock from './ContractBlock'

const mockData = {
  number: '123456',
  name: 'test',
  reference: 'test reference',
  location: {
    street: 'street',
    city: 'city',
    number: '13'
  }
}

test('renders correctly', () => {
  const tree = renderer.create(<ContractBlock data={mockData} />).toJSON()
  expect(tree).toMatchSnapshot()
})
