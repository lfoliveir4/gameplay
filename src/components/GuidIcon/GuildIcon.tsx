import React, { ReactElement } from 'react'
import { Image, View } from 'react-native'
import { GuildIconProps } from './props'

import { Styles } from './styles'

import DiscordSVG from '../../assets/discord.svg'

const { CDN_IMAGE } = process.env

export default function GuildIcon({ guildId, iconId }: GuildIconProps): ReactElement {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`

  return (
      <View style={Styles.container}>
        {
          iconId ? (
              <Image source={{ uri }} style={Styles.image} resizeMode="cover" />
          ) : (
              <DiscordSVG width={40} height={40} />
          )
        }
      </View>

  )
}
