import React, { ReactElement } from 'react'
import { View, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { LinearGradient } from "expo-linear-gradient";

import { CategoryItemProps } from './props'

import { Styles } from './styles'

import { colors } from "../../styles/colors";

export default function CategoryItem({
  title,
  checked = false,
  hasCheckbox = false,
  icon: Icon,
  ...rest
  }: CategoryItemProps): ReactElement {
  return (
      <RectButton {...rest}>
        <LinearGradient
            style={Styles.container}
            colors={[colors.secondary50, colors.secondary70]}
        >
          <LinearGradient
              style={[Styles.content, { opacity: checked ? 1 : 0.5 }]}
              colors={[ checked ? colors.secondary85 : colors.secondary40, colors.secondary50 ]}
          >
            { hasCheckbox && <View style={checked ? Styles.checked : Styles.check} /> }

            <Icon width={48} height={48} />

            <Text style={Styles.title}>{title}</Text>
          </LinearGradient>
        </LinearGradient>
      </RectButton>
  );
}
