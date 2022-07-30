import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { firebase } from './src/firebase/config'
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
      <Stack.Navigator>
      
      { user ? (
        <Stack.Screen name="Suggestions">
        {props => <SuggesstionScreen {...props} extraData={user} />}
        </Stack.Screen>
        ) : (
          <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registration" component={RegistrationScreen} />
          <Stack.Screen name="Municipality" component={Municipality} />
          <Stack.Screen name="Suggestion" component={SuggesstionScreen} />
            <Stack.Screen name="Suggestiondesc" component={SugDes} />

          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}