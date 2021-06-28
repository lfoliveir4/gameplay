import { StyleSheet } from 'react-native'

import { colors } from '../../styles/colors'
import { fonts } from '../../styles/fonts'

export const Styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  content: {
    flex: 1,

  },
  header: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 12,
  },
  title: {
    fontFamily: fonts.title700,
    color: colors.heading,
    fontSize: 18,
  },
  category: {
    fontFamily: fonts.text400,
    color: colors.highlight,
    fontSize: 13,
    marginRight: 24,
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateInfo: {
    flexDirection: "row",
    alignItems: "center",

  },
  playerInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    fontFamily: fonts.text500,
    color: colors.heading,
    fontSize: 13,
    marginLeft: 7,
  },
  player:{
    fontFamily: fonts.text500,
    fontSize: 13,
    marginLeft: 7,
    marginRight: 24,
  }



})
