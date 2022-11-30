/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { useQuery } from '@tanstack/react-query'

import { View, Text } from '../../components/Themed'
import Character, { ICharacter } from '../../components/character/Character'

export default function TabTwoScreen() {
  const fetchCharacters = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character`)
    return response.json()
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data, status } = useQuery(['characters', 40], fetchCharacters, {
    keepPreviousData: true
  })

  if (status === 'loading') {
    return <Text>Loading</Text>
  }

  if (status === 'error') {
    return <Text>error</Text>
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {data?.results.map((c: ICharacter, index: number) => (
          <Character key={index} character={c} />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollView: {},
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
})
