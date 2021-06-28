import { StyleSheet } from 'react-native'

import { colors } from '../../styles/colors'
import { fonts } from '../../styles/fonts'

export const Styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  user:{
    flexDirection: "row",
  },
  greeting: {
    fontFamily: fonts.title500,
    fontSize: 24,
    color: colors.heading,
    marginRight:5,
  },
  username: {
    fontFamily: fonts.title700,
    fontSize: 24,
    color: colors.heading,
  },
  message: {
    fontFamily: fonts.text400,
    color: colors.highlight
  }

})
