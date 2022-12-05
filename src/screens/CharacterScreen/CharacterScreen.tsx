import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useQuery } from '@tanstack/react-query'
import Character, { ICharacter } from '../../components/character/Character'
import { styled } from 'nativewind'

const StyledView = styled(View)

export default function CharacterScreen() {
  const fetchCharacters = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character`)
    return response.json()
  }
  const { data, status } = useQuery(['characters'], fetchCharacters)

  if (status === 'loading') {
    return <Text>Loading</Text>
  }

  if (status === 'error') {
    return <Text>error</Text>
  }

  const renderItem = ({ item }: { item: ICharacter }): JSX.Element => (
    <Character key={item.name} character={item} />
  )

  return (
    <StyledView tw="w-max">
      <FlatList
        style={{ height: '100%' }}
        data={data?.results}
        renderItem={renderItem}
      />
    </StyledView>
  )
}
