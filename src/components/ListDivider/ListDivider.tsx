import React, { ReactElement } from 'react'
import { View, } from 'react-native'

import { ListDividerProps } from './props'

import { Styles } from './styles'

export default function ListDivider({ isCentered }: ListDividerProps): ReactElement {
  return (
      <View
        style={[Styles.container, isCentered ? { marginVertical: 12 } : { marginTop: 2, marginBottom: 31 }]}
      />
  )
}
