import { StyleSheet } from 'react-native'

import { colors } from '../../styles/colors'
import { fonts } from "../../styles/fonts";

export const Styles = StyleSheet.create({
  container: {
   flex: 1,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontFamily: fonts.title700,
    color: colors.heading,
    fontSize: 18,
    marginBottom: 4,
  },
  type: {
    fontFamily: fonts.text400,
    color: colors.highlight,
    fontSize: 13,
    marginBottom: 12,
  }
})
