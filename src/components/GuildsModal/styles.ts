import { StyleSheet } from 'react-native'
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";


export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  overlay: {
    backgroundColor: colors.overlay,
    flex: 1,
  },
  bar: {
    width: 39,
    height: 2,
    borderRadius: 2,
    backgroundColor: colors.secondary30,
    alignSelf: "center",
    marginTop: 13,
  }
})
