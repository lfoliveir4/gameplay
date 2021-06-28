import React, { ReactElement } from 'react'
import { View, Text, } from 'react-native'

import Avatar from "../Avatar";

import { MemberProps } from './props'

import { Styles } from './styles'
import { colors } from "../../styles/colors";

export default function MemberComponent({ data }: MemberProps): ReactElement {
  const { avatar_url, username, status } = data

  const iSOnline = status === "online"

  return (
      <View style={Styles.container}>
        <Avatar avatarURL={avatar_url} />

        <View>
          <Text style={Styles.title}>{username}</Text>

          <View style={Styles.status}>
            <View style={[Styles.bulletStatus, { backgroundColor: iSOnline ? colors.on : colors.primary }]} />
            <Text style={Styles.nameStatus}>{ iSOnline ? "Disponível" : "Ocupado" }</Text>
          </View>
        </View>
      </View>
  )
}
