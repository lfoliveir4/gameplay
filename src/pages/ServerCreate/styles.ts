import { StyleSheet } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

import { colors } from '../../styles/colors'
import { fonts } from '../../styles/fonts'

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.title700,
    color: colors.heading,
    marginBottom: 12,
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
  select: {
    width: "100%",
    height: 68,
    flexDirection: "row",
    borderColor: colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    paddingRight: 25,
    overflow: "hidden",
  },
  selectBody: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    height: 64,
    width: 68,
    backgroundColor: colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
  },
  field: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  column: {
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    marginRight: 4,
    fontSize: 15,
    fontFamily: fonts.text500,
    color: colors.highlight,
  },
  caractersLimit: {
    fontFamily: fonts.text400,
    fontSize: 13,
    color: colors.highlight
  },
  footer: {
    marginVertical: 20,
    marginBottom: 56,

  }
})
