import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as React from 'react'
import { IconProps } from '../../../../types'

export default function ScanIcon({ size, color }: IconProps) {
  return <MaterialCommunityIcons name="qrcode-scan" size={size} color={color} />
}
