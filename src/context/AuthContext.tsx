import React, { useState, useCallback, useEffect, createContext, ReactElement } from 'react'
import * as AuthSesion from 'expo-auth-session'
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from "../services/api";
import { COLLECTION_USER } from "../config/storage";

const { CLIENT_ID } = process.env
const { CDN_IMAGE, } = process.env
const { REDIRECT_URI } = process.env
const { RESPONSE_TYPE } = process.env
const { SCOPE } = process.env


interface AuthProvderProps {
  children: JSX.Element | JSX.Element[]
}

interface User {
  id: string
  username: string
  firstName: string
  avatar: string
  email: string
  token: string
}

interface AuthContextData {
  user: User
  loading: boolean
  signIn: () => Promise<void>
  signOut: () => Promise<void>
}

type AuthorizationResponse = AuthSesion.AuthSessionResult & {
  params: {
    access_token?: string
    error?: string
  }
}

export const AuthContext = createContext({} as AuthContextData)

export default function AuthProvider({ children }: AuthProvderProps): ReactElement {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false)


  const signIn = useCallback(async () => {
        try {
          setLoading(true)

          const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

          const { type, params } = await AuthSesion.startAsync({ authUrl }) as AuthorizationResponse

          if (type === "success" && !params.error) {
            api.defaults.headers.authorization = `Bearer ${params.access_token}`

            const userInfo = await api.get("/users/@me")
            const firstName = userInfo.data.username.split(" ")[0]
            userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`

            const userData = {
              ...userInfo.data,
              firstName,
              token: params.access_token
            }

            await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(userData))
            setUser(userData)
          }
        } catch(e) {
          console.log("error", e)
        } finally {
          setLoading(false)
        }
      },[loading, user],
  );

  const signOut = useCallback(async () => {
        setLoading(true)
        await AsyncStorage.removeItem(COLLECTION_USER)
        setUser({} as User)
        setLoading(false)
      }, [user],
  );

  useEffect(() => {
    async function loadUserStorage() {
      const storage = await AsyncStorage.getItem(COLLECTION_USER)

      if (storage) {
        const userLogged = JSON.parse(storage)
        api.defaults.headers.authorization = `Bearer ${userLogged.token}`

        setUser(userLogged)
      }
    }

    loadUserStorage()
  }, [user]);

  return (
      <AuthContext.Provider value={{ user, signIn, loading, signOut }}>
        {children}
      </AuthContext.Provider>
  )
}
