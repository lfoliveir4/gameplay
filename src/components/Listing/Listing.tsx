import React, { ReactElement } from 'react'
import { View, Text, } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import GuildIcon from "../GuidIcon";

import { ListingProps, } from './props'

import { Styles } from './styles'

import PlayerIcon from '../../assets/player.svg'
import Calendar from '../../assets/calendar.svg'

import { categories } from "../../utils/categories";
import { colors } from "../../styles/colors";

export default function Listing({ data, ...rest }: ListingProps): ReactElement {
  const [category] = categories.filter(item => item.id === data.category);
  const { owner } = data.guild

  return (
      <RectButton {...rest}>
        <View style={Styles.container}>
          <GuildIcon guildId={data.guild.id} iconId={data.guild.icon} />

          <View style={Styles.content}>
            <View style={Styles.header}>
              <Text style={Styles.title}>{data.guild.name}</Text>

              <Text style={Styles.category}>
                {category?.title}
              </Text>
            </View>

            <View style={Styles.footer}>
              <View style={Styles.dateInfo}>
                <Calendar/>
                <Text style={Styles.date}>{data.date}</Text>
              </View>


              <View style={Styles.playerInfo}>
                <PlayerIcon fill={owner ? colors.primary : colors.on}/>

                <Text style={[Styles.player, {color: owner ? colors.primary : colors.on}]}>
                  {owner ? "Anfitrição" : "Visitante"}
                </Text>

              </View>
            </View>
          </View>
        </View>
      </RectButton>
  )
}
