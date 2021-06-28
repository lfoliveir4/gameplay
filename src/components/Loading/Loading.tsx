import React, { ReactElement } from 'react'
import { View, ActivityIndicator } from 'react-native'

import { colors } from "../../styles/colors";
import { Styles } from "./styles";


export default function Loading(): ReactElement {
  return (
      <View style={Styles.container}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
  )
}
