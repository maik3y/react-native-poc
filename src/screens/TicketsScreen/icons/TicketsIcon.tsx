import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as React from 'react'
import { IconProps } from '../../../../types'

export default function TicketsIcon({ size, color }: IconProps) {
  return (
    <MaterialCommunityIcons
      name="format-list-checks"
      size={size}
      color={color}
    />
  )
}
