import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Tabe from './Tabe'
import { TouchableOpacity } from 'react-native-gesture-handler';
const HomeScreen = ({navigation}) => {

const { colors } = useTheme();

const theme = useTheme();
  
    return (
      <View style={styles.container}>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Home Screen</Text>
      <Button
        title="Go to complain screen"
        onPress={() => navigation.navigate("Complain")}
      />
     <TouchableOpacity onPress={()=>navigation.navigate("Suggestion")}><Text>suggesstions</Text></TouchableOpacity>
      <Button
        title="Go to Parametre screen"
        onPress={() => navigation.navigate("Tabe")}
      />
     
      </View>
      
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});