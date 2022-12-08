import { FontAwesome5 } from '@expo/vector-icons'
import * as React from 'react'
import { IconProps } from '../../../../types'

export default function ScanIcon({ size, color }: IconProps) {
  return <FontAwesome5 name="file-contract" size={size} color={color} />
}
