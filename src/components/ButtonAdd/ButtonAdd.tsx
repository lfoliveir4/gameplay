import React, { ReactElement } from 'react'
import { RectButton } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { ButtonAddProps } from './props'

import { Styles } from './styles'
import { colors } from "../../styles/colors";

export default function ButtonAdd({ onPress }: ButtonAddProps): ReactElement {
  return (
      <RectButton style={Styles.container} onPress={onPress}>
        <MaterialCommunityIcons name="plus" color={colors.heading} size={24} />
      </RectButton>
  )
}
