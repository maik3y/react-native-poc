import { FontAwesome5 } from '@expo/vector-icons'
import * as React from 'react'
import { IconProps } from '../../../../types'

export default function TransportIcon({ size, color }: IconProps) {
  return <FontAwesome5 name="truck" size={size} color={color} />
}
