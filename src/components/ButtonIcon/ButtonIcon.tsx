import React, { ReactElement } from 'react'
import { RectButton } from 'react-native-gesture-handler'
import { View, Text, Image } from 'react-native'

import { ButtonIconProps } from './props'

import discord from '../../assets/discord.png'

import { Styles } from './styles'

export default function ButtonIcon({ title, onPress }: ButtonIconProps): ReactElement {
  return (
      <RectButton style={Styles.container} onPress={onPress}>
        <View style={Styles.iconWrapper}>
          <Image source={discord} style={Styles.icon} resizeMode="stretch"/>
        </View>

        <Text style={Styles.title}>{title}</Text>
      </RectButton>
  )
}
