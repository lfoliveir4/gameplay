import React, { ReactElement, useCallback } from 'react'
import { Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";


import { HeaderProps } from './props'

import { Styles } from './styles'
import { colors } from "../../styles/colors";

export default function Header({ title, action }: HeaderProps): ReactElement {
  const navigation = useNavigation()

  const handleGoBack = useCallback(() => navigation.goBack(), []);

  return (
      <LinearGradient
          style={Styles.container}
          colors={[colors.secondary80, colors.secondary100]}
      >
        <BorderlessButton onPress={handleGoBack}>
          <Feather name="arrow-left" size={24} color={colors.heading} />
        </BorderlessButton>

        <Text style={Styles.title}>{title}</Text>

        { action ? <View>{action}</View> : <View style={{ width: 24 }} /> }

      </LinearGradient>
  )
}
