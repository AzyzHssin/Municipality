import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {firebase} from "../../firebase/config"
const Municipality = ({navigation}) => {
    const [name,setname]=useState('')
    const ref=firebase.firestore().collection('suggestions')
    var handlepress=()=>{
        ref.add({municipalityname:name})
        navigation.navigate('Suggestiondesc')
    }
  return (
    <View>
    <TextInput placeholder='enter the name of the paladiya' value={name} onChangeText={setname}/>
    <TouchableOpacity onPress={()=>handlepress()}><Text>submit</Text></TouchableOpacity>
 </View>
  )
}

export default Municipality

const styles = StyleSheet.create({})