import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { fonts } from "../../styles/fonts";
import { colors } from "../../styles/colors";

export const Styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    paddingTop: getStatusBarHeight(),
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontFamily: fonts.title700,
    fontSize: 20,
    color: colors.heading
  }
})
