import { StyleSheet } from 'react-native'

import { colors } from '../../styles/colors'
import { fonts } from '../../styles/fonts'

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: "center",
    paddingBottom: 20
  },
  image: {
    height: 360,
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50
  },
  title: {
    color: colors.heading,
    textAlign: "center",
    fontSize: 35,
    marginBottom: 16,
    fontWeight: "bold",
    fontFamily: fonts.title700,
    lineHeight: 40
  },
  subtitle: {
    color: colors.heading,
    textAlign: "center",
    fontSize: 15,
    marginBottom: 64,
    fontFamily: fonts.text500,
    lineHeight: 25
  }
})
