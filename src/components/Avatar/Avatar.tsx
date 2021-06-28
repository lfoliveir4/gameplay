import React, { ReactElement } from 'react'
import { Image } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";

import { AvatarProps } from './props'

import { Styles } from './styles'
import { colors } from "../../styles/colors";

export default function Avatar({ avatarURL }: AvatarProps): ReactElement {
  return (
      <LinearGradient
          style={Styles.container}
          colors={[colors.secondary50, colors.secondary70]}
      >
        <Image source={{ uri: avatarURL }} style={Styles.avatar} />
      </LinearGradient>
  )
}
