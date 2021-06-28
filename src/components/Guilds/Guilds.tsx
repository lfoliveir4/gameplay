import React, { ReactElement, useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'

import Guild from "../Guild";
import ListDivider from '../ListDivider'
import Loading from "../Loading";

import { GuildComponentProps } from './props'

import api from "../../services/api";

import { Styles } from './styles'
import { Guild as GuildProps } from "../Guild/props";

export default function GuildsComponent({ handleGuildSelected }: GuildComponentProps): ReactElement {
  const [guilds, setGuilds] = useState<GuildProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadGuilds() {
      const response = await api.get('/users/@me/guilds')
      setGuilds(response.data)
      setLoading(false)
    }

    loadGuilds()
  }, []);

  return (
      <View style={Styles.container}>
        {
          loading ? (
            <Loading/>
          ) : (
            <FlatList
              data={guilds}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                  <Guild data={item} onPress={() => handleGuildSelected(item)}/>
              )}
              ItemSeparatorComponent={() => <ListDivider isCentered/>}
              showsVerticalScrollIndicator={false}
              style={Styles.guild}
              contentContainerStyle={{ paddingBottom: 24, paddingTop: 103 }}
              ListHeaderComponent={() => <ListDivider isCentered/> }
            />
          )
        }
      </View>
  )
}
