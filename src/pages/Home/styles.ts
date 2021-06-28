import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { colors } from '../../styles/colors'
import { fonts } from '../../styles/fonts'

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 26,
  },
  matches: {
    marginTop: 24,
    marginLeft: 24,
  },

  containerLogout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textLogoutContainer: {
    marginTop: 20,
  },

  textLogout: {
    color: colors.heading
  },

  containerButtonsLogout: {
    flex: 1,
    flexDirection: "row",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 160,
    height: 56,
    borderRadius: 8,
    marginLeft: 7,
    marginTop: 20,
  },

  textButton: {
    color: colors.heading
  }
})
