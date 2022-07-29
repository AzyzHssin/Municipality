
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens'
import {decode, encode} from 'base-64'
import SuggesstionScreen from './src/screens/suggesstions/SuggesstionScreen';
import Municipality from './src/screens/MunicipalityLocation/Municipality';
import SugDes from './src/screens/SugDesc/SugDes';
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Suggestion" component={SuggesstionScreen} />

        { user ? (
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} extraData={user} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="Municipality" component={Municipality} />
            <Stack.Screen name="Suggestiondesc" component={SugDes} />

          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}