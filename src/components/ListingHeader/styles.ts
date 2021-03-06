import { StyleSheet } from 'react-native'

import { colors } from '../../styles/colors'
import { fonts } from '../../styles/fonts'

export const Styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginTop: 27,
  },
  title: {
    fontFamily: fonts.title700,
    color: colors.heading,
    fontSize: 18,
  },
  subtitle: {
    fontFamily: fonts.text400,
    color: colors.highlight,
    fontSize: 13,
  },
})
