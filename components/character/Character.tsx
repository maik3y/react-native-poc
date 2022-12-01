import React from 'react'
import { StyleSheet, Image, ImageSourcePropType, Text } from 'react-native'
import { View } from '../Themed'

interface ICharacterProps {
  character: ICharacter
}
export interface ICharacter {
  image: string
  name: string
  status: string
  species: string
  location: {
    name: string
  }
}

const Character = ({ character }: ICharacterProps) => {
  if (!character) return <></>
  const { image, name } = character
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image as ImageSourcePropType} />
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: 'none'
  },
  image: { width: '100%' },
  text: { color: '#fff' }
})

export default Character
