import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { firebase } from './src/firebase/config'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { LoginScreen, HomeScreen, RegistrationScreen, ParametreScreen, ComplainScreen } from './src/screens';
import Tabe from './src/screens/HomeScreen/Tabe'
import Suggestion from './src/screens/suggesstions/SuggesstionScreen'

import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);

  if (loading) {
    return (
      <></>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}> 
      { user ? (
        <Stack.Screen name="Municipality">
        {props => <Tabe {...props} extraData={user} />}
        </Stack.Screen>
        ) : (
          <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registration" component={RegistrationScreen} />
          </>
        )}
       
          <Stack.Screen name="Suggestion" component={Suggestion} />
          <Stack.Screen name="Complain" component={ComplainScreen} />
          <Stack.Screen name="Parametre" component={ParametreScreen} />
          <Stack.Screen name="Tabe" component={Tabe} />
      </Stack.Navigator>
   
     
    </NavigationContainer>
  );
}