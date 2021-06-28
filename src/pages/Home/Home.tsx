import React, { ReactElement, useCallback, useState, useContext } from 'react'
import { View, Text, FlatList } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { RectButton } from "react-native-gesture-handler";

import { HomeProps } from './props'

import Profile from '../../components/Profile'
import ButtonAdd from "../../components/ButtonAdd";
import Category from "../../components/Category";
import ListingHeader from "../../components/ListingHeader";
import Listing from "../../components/Listing";
import ListDivider from "../../components/ListDivider";
import Background from "../../components/Background";
import LogoutModal from "../../components/LogoutModal";
import Loading from "../../components/Loading";


import { AuthContext } from "../../context/AuthContext";

import { ListingProps } from "../../components/Listing/props";

import { Styles } from './styles'

import { COLLECTION_SERVERS } from "../../config/storage";

import { colors } from "../../styles/colors";

export default function Home({}: HomeProps): ReactElement {
  const [category, setCategory] = useState("")
  const navigation = useNavigation()
  const { signOut } = useContext(AuthContext);

  const [schedulingServers, setSchedulingServers] = useState<ListingProps[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalLogoutVisible, setIsModalLogoutVisible] = useState(false)

  const handleCategorySelect = useCallback((categoryId: string) => {
      categoryId === category ? setCategory("") : setCategory(categoryId)
    },
    [category],
  );

  const handleServerDetails = useCallback((guildSelected: ListingProps) => {
    navigation.navigate("ServerDetails", { guildSelected })
  }, [navigation]);

  const handleServerCreate = useCallback(() => navigation.navigate("ServerCreate"), []);

  const handleLogout = useCallback(() => {
        setIsModalLogoutVisible(false)
        signOut()
      },
      [signOut, navigation],
  );

  async function loadSchedulingServers() {
    const storage = await AsyncStorage.getItem(COLLECTION_SERVERS)
    const scheduling: any = storage ? JSON.parse(storage) : []

    if (category) {
      setSchedulingServers(scheduling.filter(item => item.category === category))
    } else {
      setSchedulingServers(scheduling)
    }

    setLoading(false)
  }

  useFocusEffect(useCallback(() => {
    loadSchedulingServers()
  }, [category]))


  return (
      <Background>
        <View style={Styles.container}>
          <View style={Styles.header}>
            <Profile setIsModalLogoutVisible={setIsModalLogoutVisible} />
            <ButtonAdd onPress={handleServerCreate} />
          </View>

          <View>
            <Category categorySelected={category} setCategory={handleCategorySelect}/>
          </View>

          {
            loading ? (
              <Loading />
            ) : (
            <>
              <ListingHeader title="PartidasAgendadas" subtitle={`Total ${schedulingServers.length}`}/>
              <FlatList
                  data={schedulingServers}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => (
                      <Listing onPress={() => handleServerDetails(item)} data={item} />
                  )}
                  style={Styles.matches}
                  showsVerticalScrollIndicator={false}
                  ItemSeparatorComponent={() => <ListDivider/>}
                  contentContainerStyle={{ paddingBottom: 24, }}
              />
            </>
            )
          }
        </View>

        <LogoutModal visible={isModalLogoutVisible}>
          <View style={Styles.containerLogout}>
            <View style={Styles.textLogoutContainer}>
              <Text style={Styles.textLogout}>Deseja sair do gameplay?</Text>
            </View>

            <View style={Styles.containerButtonsLogout}>
              <RectButton onPress={() => setIsModalLogoutVisible(false)} style={[Styles.button, { borderWidth: 1, borderColor: colors.secondary50 }]}>
                <Text style={Styles.textButton}>Não</Text>
              </RectButton>

              <RectButton onPress={handleLogout} style={[Styles.button, { backgroundColor: colors.primary }]}>
                <Text style={Styles.textButton}>Sim</Text>
              </RectButton>
            </View>
          </View>
        </LogoutModal>
      </Background>
  )
}
