import React, { ReactElement } from 'react'
import { TextInput } from 'react-native'

import { InputSmallProps } from './props'

import { Styles } from './styles'

export default function InputSmall({ ...rest }: InputSmallProps): ReactElement {
  return (
      <TextInput style={Styles.container} {...rest} />
  )
}
