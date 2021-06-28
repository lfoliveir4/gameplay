import { StyleSheet } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

import { colors } from '../../styles/colors'
import { fonts } from '../../styles/fonts'

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: "100%",
    height: 234,
  },
  bannerContent: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.title700,
    color: colors.heading
  },
  subtitle: {
    fontSize: 13,
    fontFamily: fonts.text400,
    color: colors.heading,
    lineHeight: 21,
  },
  members: {
    marginLeft: 24,
    marginTop: 27,
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    paddingBottom: getBottomSpace() || 20,
  },
})
