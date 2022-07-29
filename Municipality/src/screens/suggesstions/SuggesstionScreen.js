import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {firebase} from "../../firebase/config"
import ReactNativeMultiSelectbox from "react-native-multi-selectbox"

const SuggesstionScreen = ({navigation}) => {
    const options=[
        {
            type:"general"
        },
        {
            type:"electricity"
        },
        {
            type:"garbage"
        },
        

    ]
    const[type,setType]=useState('')
    const [name,setname]=useState('')
    const [desc,setdesc]=useState('')
const ref=firebase.firestore().collection('suggestions')
var handlesubmit= async ()=>{
  await  ref.add({type:type,municipalityname:name,description:desc})
  alert("added successfully")
}
    var handlepressgeneral=()=>{
ref.add({type:"general"})
        navigation.navigate("Municipality")
    }
    var handlepresselectricity=()=>{
        ref.add({type:"garbage"})
                navigation.navigate("Municipality")
            }
            var handlepressgarbage=()=>{
                ref.add({type:"garbage"})
                        navigation.navigate("Municipality")
                    }
  return (
    <View>
    <ReactNativeMultiSelectbox/>
    <TextInput value={type} onChangeText={setType} placeholder='type '/>
    <TextInput value={name} onChangeText={setname} placeholder='municipality name ' />
    <TextInput value={desc} onChangeText={setdesc} placeholder='description ' />
   {/*  <TouchableOpacity onPress={()=>handlepressgeneral()}><Text>general</Text></TouchableOpacity>
     <TouchableOpacity onPress={()=>handlepresselectricity()} ><Text>electricity</Text></TouchableOpacity>
     <TouchableOpacity onPress={()=>handlepressgarbage()}><Text>garbage</Text></TouchableOpacity>*/}

  <TouchableOpacity onPress={()=>handlesubmit()}><Text>submit</Text></TouchableOpacity>
    </View>
  )
}

export default SuggesstionScreen

const styles = StyleSheet.create({})