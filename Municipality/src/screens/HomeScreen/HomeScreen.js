import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';

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
      <Button
        title="Go to Suggestion screen"
        onPress={() => navigation.navigate("Suggestion")}
      />
      <Button
        title="Go to Parametre screen"
        onPress={() => navigation.navigate("Parametre")}
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
