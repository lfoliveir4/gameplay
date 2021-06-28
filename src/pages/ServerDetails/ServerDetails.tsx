import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import { View, Text, FlatList, ImageBackground, Share, Platform, Linking } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'
import { useRoute } from "@react-navigation/native";


import Background from "../../components/Background";
import Header from "../../components/Header";
import ListingHeader from "../../components/ListingHeader";
import Member from "../../components/Member";
import ListDivider from "../../components/ListDivider";
import ButtonIcon from '../../components/ButtonIcon'
import Loading from "../../components/Loading";


import { ServerDetailsProps } from './props'
import { MemberProps } from "../../components/Member/props";
import { Listing } from "../../components/Listing/props";

import api from "../../services/api";

import banner from '../../assets/banner.png'

import { Styles } from './styles'
import { colors } from "../../styles/colors";


interface RouteParams {
  guildSelected: Listing
}

interface GuildWidget {
  id: string
  name: string
  instant_invite: string
  members: MemberProps[]
  presence_count: number
}

function ActionShared({ handleServerInvite }): ReactElement {
  return (
      <BorderlessButton onPress={handleServerInvite}>
        <Fontisto name="share" size={20} color={colors.primary}/>
      </BorderlessButton>
  )
}

export default function ServerDetails({}: ServerDetailsProps): ReactElement {
  const route = useRoute()
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget)
  const [loading, setLoading] = useState(false)

  const {guildSelected} = route.params as RouteParams

  useEffect(() => {
    async function guildWidget() {
      setLoading(true)
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`)
      setWidget(response.data)
      setLoading(false)
    }

    guildWidget()
  }, []);

  const handleServerInvite = useCallback(() => {
      const message = Platform.OS === "ios" ? `Junte-se a ${guildSelected.guild.name}` : widget.instant_invite
      Share.share({message, url: widget.instant_invite})
    },
    [],
  );

  const handleOpenGuild = useCallback(() => {
      Linking.openURL(widget.instant_invite)
    },
    [],
  );

  return (
      <Background>
        <Header
            title="Detalhes"
            action={guildSelected.guild.owner && <ActionShared handleServerInvite={handleServerInvite}/>}
        />

        <ImageBackground source={banner} style={Styles.banner}>
          <View style={Styles.bannerContent}>
            <Text style={Styles.title}>{guildSelected.guild.name}</Text>

            <Text style={Styles.subtitle}>{guildSelected.description}</Text>
          </View>
        </ImageBackground>

        {
          loading ? (
            <Loading/>
          ) : (
            <>
              <ListingHeader title="Jogadores" subtitle={`Total ${widget.members?.length}`}/>
              <FlatList
                  data={widget.members}
                  renderItem={({item}) => (
                      <Member data={item}/>
                  )}
                  keyExtractor={item => item.id}
                  ItemSeparatorComponent={() => <ListDivider isCentered/>}
                  style={Styles.members}
              />
                {
                  guildSelected.guild.owner && (
                      <View style={Styles.footer}>
                        <ButtonIcon title="Entrar na partida" onPress={handleOpenGuild}/>
                      </View>
                  )
                }
            </>
          )
        }
      </Background>
  )
}
