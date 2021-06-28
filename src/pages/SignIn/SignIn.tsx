import React, { ReactElement, useCallback, useContext } from 'react'
import { View, Text, Image, SafeAreaView, Alert, ActivityIndicator } from 'react-native'

import Background from "../../components/Background";
import ButtonIcon from "../../components/ButtonIcon";

import { AuthContext } from "../../context/AuthContext";

import { SignInProps } from './props'

import illustration from '../../assets/illustration.png'

import { Styles } from './styles'

import { colors } from "../../styles/colors";

export default function SignIn({}: SignInProps): ReactElement {
  const { signIn, loading } = useContext(AuthContext);

  const handleNavigation = useCallback(async () => {
    try {
      await signIn()
    } catch (e) {
      Alert.alert(e)
    }
  }, [])

  return (
      <Background>
        <View style={Styles.container}>
          <Image source={illustration} style={Styles.image} resizeMode="stretch"/>
          <View style={Styles.content}>
            <Text style={Styles.title}>
              Conecte-se {`\n`}
              e organize suas {`\n`}
              jogatinas
            </Text>

            <Text style={Styles.subtitle}>
              Crie grupos para jogar seus games {`\n`}
              favoritos com seus amigos
            </Text>
            {
              loading ? (
                <ActivityIndicator color={colors.primary} />
              ) : (
                <ButtonIcon title="Entrar com discord" onPress={handleNavigation}/>
              )
            }
          </View>
          <SafeAreaView/>
        </View>
      </Background>
  )
}
