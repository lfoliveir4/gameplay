import { StyleSheet } from 'react-native'
import { colors } from "../../styles/colors";

export const Styles = StyleSheet.create({
  container: {
    width: 64,
    height: 64,
    borderRadius: 8,
    marginRight: 20,
    backgroundColor: colors.discord,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    width: 64,
    height: 64,
  },
})
