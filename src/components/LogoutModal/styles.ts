import { StyleSheet } from 'react-native'

import { colors } from "../../styles/colors";

export const Styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: 170,
    width: "100%",
    bottom: 0
  },
  overlay: {
    backgroundColor: colors.overlay,
    flex: 1,
  },
})
