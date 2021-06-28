import React, { ReactElement } from 'react'
import { View, Modal } from 'react-native'

import { GuildsModalProps, } from './props'

import { Styles } from './styles'
import Background from "../Background";

export default function LogoutModal({ children, close, ...rest }: GuildsModalProps): ReactElement {
  return (
      <Modal transparent animationType="fade" statusBarTranslucent {...rest}>
          <View style={Styles.overlay}>
            <View style={Styles.container}>
              <Background>
                {children}
              </Background>
            </View>
          </View>
      </Modal>
  )
}
