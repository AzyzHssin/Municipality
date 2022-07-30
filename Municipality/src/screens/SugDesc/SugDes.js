import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {firebase} from "../../firebase/config"
const SugDes = () => {
    const [desc,setdesc]=useState("")
    const ref=firebase.firestore().collection("suggestions")
    var handlesubmit = async ()=>{
   await ref.add({description:desc})
   setdesc('')
   }
  return (
    <View>
  <TextInput value={desc} numberOfLines={4} onChangeText={setdesc} placeholder='enter the description '/>
  <TouchableOpacity onPress={()=>handlesubmit()}><Text>submit</Text></TouchableOpacity>
    </View>
  )
}

export default SugDes

const styles = StyleSheet.create({})