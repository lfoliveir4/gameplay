import React, { ReactElement, useContext } from 'react'
import { View, Text, } from 'react-native'

import Avatar from "../Avatar";

import { AuthContext } from "../../context/AuthContext";

import { ProfileProps } from './props'

import { Styles } from './styles'
import { RectButton } from "react-native-gesture-handler";

export default function ProfileComponent({ setIsModalLogoutVisible }: ProfileProps): ReactElement {
  const { user } = useContext(AuthContext);

  return (
      <View style={Styles.container}>
        <RectButton onPress={() => setIsModalLogoutVisible(true)}>
          <Avatar avatarURL={user.avatar} />
        </RectButton>

        <View>
          <View style={Styles.user}>
            <Text style={Styles.greeting}>Olá,</Text>
            <Text style={Styles.username}>{user.firstName}</Text>
          </View>

          <Text style={Styles.message}>Hoje é dia de vitória</Text>
        </View>
      </View>
  )
}
