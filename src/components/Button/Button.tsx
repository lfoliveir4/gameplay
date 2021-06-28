import React, { ReactElement } from 'react'
import { RectButton } from 'react-native-gesture-handler'
import { Text } from 'react-native'

import { ButtonProps } from './props'

import { Styles } from './styles'

export default function Button({ title, onPress }: ButtonProps): ReactElement {
  return (
      <RectButton style={Styles.container} onPress={onPress}>
        <Text style={Styles.title}>{title}</Text>
      </RectButton>
  )
}
