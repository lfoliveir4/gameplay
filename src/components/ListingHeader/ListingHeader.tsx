import React, { ReactElement } from 'react'
import { View, Text } from 'react-native'

import { ListingProps } from './props'

import { Styles } from './styles'

export default function ListingHeader({ title, subtitle }: ListingProps): ReactElement {
  return (
      <View style={Styles.container}>
        <Text style={Styles.title}>{title}</Text>

        <Text style={Styles.subtitle}>{subtitle}</Text>
      </View>
  )
}
