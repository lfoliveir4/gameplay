import React, { ReactElement } from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import { BackgroundProps } from './props'

import { Styles } from './styles'
import { colors } from "../../styles/colors";

export default function Background({ children }: BackgroundProps): ReactElement {
  return (
      <LinearGradient
          style={Styles.container}
          colors={[colors.secondary80, colors.secondary100]}
      >
        {children}
      </LinearGradient>
  )
}
