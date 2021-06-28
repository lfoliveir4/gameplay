import { StyleSheet } from 'react-native'

import { colors } from '../../styles/colors'
import { fonts } from '../../styles/fonts'

export const Styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginRight: 8,
  },
  content: {
    width: 100,
    height: 116,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  title: {
    fontFamily:fonts.title700,
    color: colors.heading,
    fontSize: 15,
  },
  check: {
    position: "absolute",
    top: 7,
    right: 7,
    width: 10,
    height: 10,
    backgroundColor: colors.secondary100,
    borderColor: colors.secondary50,
    borderRadius: 2,
    borderWidth: 2,
  },
  checked: {
    position: "absolute",
    top: 7,
    right: 7,
    width: 10,
    height: 10,
    backgroundColor: colors.primary,
    borderRadius: 2,
    borderWidth: 2,
  }
})
