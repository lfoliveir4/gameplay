import { StyleSheet } from 'react-native'

import { colors } from '../../styles/colors'
import { fonts } from "../../styles/fonts";

export const Styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 56,
    backgroundColor: colors.primary,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    flex: 1,
    color: colors.heading,
    fontSize: 15,
    textAlign: "center",
    fontFamily: fonts.title500,
  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: colors.line
  },
  icon: {
    width: 24,
    height: 18,
  }
})
