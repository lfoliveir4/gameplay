import { StyleSheet } from 'react-native'
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";


export const Styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 95,
    backgroundColor: colors.secondary40,
    color: colors.heading,
    borderRadius: 8,
    fontFamily: fonts.text400,
    fontSize: 13,
    marginRight: 4,
    textAlign: "justify",
    paddingHorizontal: 16,
    textAlignVertical: "top",
    paddingTop: 16,
    borderWidth: 1,
    borderColor: colors.secondary50,
  }
})
