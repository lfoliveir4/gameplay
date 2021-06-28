import { StyleSheet } from 'react-native'

import { colors } from '../../styles/colors'
import { fonts } from '../../styles/fonts'

export const Styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: fonts.title700,
    color: colors.heading,
    fontSize: 18,
  },
  nameStatus: {
    fontFamily: fonts.text400,
    color: colors.highlight,
    fontSize: 13,
  },
  status: {
    flexDirection: "row",
    alignItems: "center",
  },
  bulletStatus: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 9,
  }
})
