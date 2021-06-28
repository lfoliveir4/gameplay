import React, { ReactElement } from 'react'
import { View, Modal, TouchableWithoutFeedback } from 'react-native'

import { GuildsModalProps, } from './props'

import { Styles } from './styles'
import Background from "../Background";

export default function GuildsModal({ children, close, ...rest }: GuildsModalProps): ReactElement {
  return (
      <Modal transparent animationType="slide" statusBarTranslucent {...rest}>
        <TouchableWithoutFeedback onPress={close}>
          <View style={Styles.overlay}>
            <View style={Styles.container}>
              <Background>
                <>
                  <View style={Styles.bar}/>
                  {children}
                </>
              </Background>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
  )
}
