import React, { ReactElement, useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { AuthContext } from "../context/AuthContext";

import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import ServerDetails from '../pages/ServerDetails'
import ServerCreate from '../pages/ServerCreate'

import { colors } from "../styles/colors";

const Stack = createStackNavigator()

export default function AppRoutes(): ReactElement {
  const { user } = useContext(AuthContext);

  return (
      <Stack.Navigator
          headerMode="none"
          screenOptions={{
            cardStyle: {
              backgroundColor: colors.secondary100
            }
          }}
      >
        {user.id  ? (
          <>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="ServerCreate" component={ServerCreate}/>
            <Stack.Screen name="ServerDetails" component={ServerDetails}/>
          </>
          ) : (
            <Stack.Screen name="SignIn" component={SignIn}/>
          )
        }
      </Stack.Navigator>
  )
}
