import React, { ReactElement } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import GuildIcon from "../GuidIcon";

import { GuildProps } from './props'

import { Styles } from './styles'
import { colors } from "../../styles/colors";

export default function Guild({ onPress, data }: GuildProps): ReactElement {
  return (
      <TouchableOpacity onPress={onPress} style={Styles.container}>
        <GuildIcon guildId={data.id} iconId={data.icon} />

        <View style={Styles.content}>
          <View>
            <Text style={Styles.title}>
              {data.name}
            </Text>

            <Text style={Styles.type}>
              {data.owner ? "Administrador" : "Convidado"}
            </Text>
          </View>
        </View>

        <Feather name="chevron-right" color={colors.heading} size={24} />
      </TouchableOpacity>
  )
}
