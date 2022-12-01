import { styled } from 'nativewind'
import React from 'react'
import { Image, Text } from 'react-native'
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

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledImage = styled(Image)

const Character = ({ character }: ICharacterProps) => {
  if (!character) return <></>
  const { image, name, status, species, location } = character
  return (
    <StyledView tw="w-full mb-5 self-center max-w-sm rounded-lg shadow-md">
      <StyledImage
        tw="rounded-t-lg w-100 h-80"
        source={{
          uri: image
        }}
      />
      <StyledView tw="p-5 bg-gray-100">
        <StyledText tw="mb-2 text-2xl font-bold tracking-tight dark:text-black">
          {name}
        </StyledText>
        <StyledText tw="mb-3 font-normal dark:text-gray-700">
          {status} - {species}
        </StyledText>
        <StyledText tw="mb-3 font-normal dark:text-gray-700">
          Last known location: {location?.name}
        </StyledText>
        <StyledText tw="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg focus:ring-4 focus:outline-none">
          Read more
        </StyledText>
      </StyledView>
    </StyledView>
  )
}
export default Character
