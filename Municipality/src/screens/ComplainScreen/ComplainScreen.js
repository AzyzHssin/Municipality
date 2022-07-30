import * as React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Appbar } from 'react-native-paper';
import  { useState } from 'react'
import {firebase} from "../../firebase/config"
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles.js'
export default function ComplainScreen({ navigation }) {


    const[topic,settopic]=useState('')
    const [body,setbody]=useState('')
    const [image,setimage]=useState('')
    const FireBaseRef=firebase.firestore().collection('Complains')
    const [page,setPage]=useState(1)

    var handlesubmit= async ()=>{
        await  FireBaseRef.add({topic:topic,body:body,image:image})
        alert("added successfully")
      }
      
       
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Appbar.Header>
            <Appbar.Content title="Complains" />
            </Appbar.Header>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Complains Screen</Text>
<View style={styles.container}   >    </View>
</View>
    );
}