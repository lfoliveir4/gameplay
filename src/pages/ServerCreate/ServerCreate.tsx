import React, { ReactElement, useCallback, useState } from 'react'
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import uuid from 'react-native-uuid'
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Background from "../../components/Background";
import Header from "../../components/Header";
import Category from "../../components/Category";
import GuidIcon from "../../components/GuidIcon";
import InputSmall from "../../components/InputSmall";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import GuildsModal from "../../components/GuildsModal";
import GuildsComponent from "../../components/Guilds";

import { COLLECTION_SERVERS } from "../../config/storage";

import { Guild } from "../../components/Guild/props";
import { ServerCreateProps } from './props'

import { Styles } from './styles'
import { colors } from "../../styles/colors";

export default function ServerCreate({}: ServerCreateProps): ReactElement {
  const [category, setCategory] = useState("");
  const [openGuildsModal, setOpenGuildsModal] = useState(false)
  const [guild, setGuild] = useState<Guild>({} as Guild)

  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [hour, setHour] = useState("")
  const [minute, setMinute] = useState("")
  const [description, setDescription] = useState("")

  const navigation = useNavigation()

  const handleOpenGuildModal = useCallback(() => {
      setOpenGuildsModal(true)
    },
    [openGuildsModal],
  );

  const handleGuildSelected = useCallback((guidSelected: Guild) => {
      setGuild(guidSelected)
      setOpenGuildsModal(false)
    },
    [guild, openGuildsModal],
  );

  const handleCategorySelect = useCallback((categoryId: string) => {
      setCategory(categoryId)
    },
    [category],
  );

  async function handleSave() {
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} às ${hour}:${minute}h`,
      description
    };

    const storage = await AsyncStorage.getItem(COLLECTION_SERVERS);
    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
        COLLECTION_SERVERS,
        JSON.stringify([...appointments, newAppointment])
    );

    navigation.navigate('Home');
  }

  return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={Styles.container}
      >
        <Background>
          <ScrollView style={Styles.container}>
              <Header title="Agendar Partida"  />

              <Text style={[Styles.label, { marginLeft: 24, marginTop: 26, marginBottom: 18, }]}>
                Catetoria
              </Text>

              <Category
                categorySelected={category}
                setCategory={handleCategorySelect}
                hasCheckBox
              />

              <View style={Styles.form}>
                  <RectButton onPress={handleOpenGuildModal}>
                    <View style={Styles.select}>
                      { guild.icon ? <GuidIcon iconId={guild.icon} guildId={guild.id} /> : <View style={Styles.image} />  }

                      <View style={Styles.selectBody}>
                        <Text style={Styles.label}>
                          {guild.name ? guild.name : "Selecione um servidor"}
                        </Text>
                      </View>

                      <Feather name="chevron-right" color={colors.heading} size={18} />
                    </View>
                  </RectButton>

                <View style={Styles.field}>
                  <View>
                    <Text style={Styles.label}>Dia e Mês</Text>

                    <View style={Styles.column}>
                      <InputSmall
                          keyboardType="numeric"
                          maxLength={2}
                          onChangeText={setDay}
                      />

                      <Text style={Styles.divider}>/</Text>

                      <InputSmall
                          keyboardType="numeric"
                          onChangeText={setMonth}
                      />
                    </View>
                  </View>
                  { /* divider */}
                  <View>
                    <Text style={Styles.label}>Hora e Minuto</Text>

                    <View style={Styles.column}>
                      <InputSmall
                          keyboardType="numeric"
                          maxLength={2}
                          onChangeText={setHour}
                      />

                      <Text style={Styles.divider}>:</Text>

                      <InputSmall
                          keyboardType="numeric"
                          onChangeText={setMinute}
                      />
                    </View>
                  </View>
                </View>
                { /* divider */ }
                <View style={[Styles.field, { marginBottom: 12 }]}>
                  <Text style={Styles.label}>Descrição</Text>
                  <Text style={Styles.caractersLimit}>Max 100 caracteres</Text>
                </View>

                <TextArea
                  multiline
                  maxLength={100}
                  numberOfLines={5}
                  autoCorrect={false}
                  onChangeText={setDescription}
                />

                <View style={Styles.footer}>
                  <Button title="Agendar" onPress={handleSave} />
                </View>
              </View>
          </ScrollView>
        </Background>

        <GuildsModal visible={openGuildsModal} close={() => setOpenGuildsModal(false)}>
          <GuildsComponent handleGuildSelected={handleGuildSelected} />
        </GuildsModal>
      </KeyboardAvoidingView>
  )
}
