import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'
import React from 'react'

export enum ICON_TYPE {
  FA = 'FA',
  FA_5 = 'FA_5',
  ION = 'ION'
}

export interface TabBarIconProps {
  color?: string
  size?: number
  name?: React.ComponentProps<typeof FontAwesome | typeof FontAwesome5>['name']
  type?: ICON_TYPE
}

export default function TabBarIcon(props: TabBarIconProps) {
  switch (props.type) {
    case ICON_TYPE.FA_5:
      return <FontAwesome5 {...props} />
    case ICON_TYPE.ION:
      return <Ionicons {...props} />
    case ICON_TYPE.FA:
    default:
      return <FontAwesome {...props} />
  }
}
