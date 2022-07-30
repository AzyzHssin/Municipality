import * as React from 'react';
import { KeyboardAvoidingView,ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Appbar } from 'react-native-paper';
import  { useState } from 'react'
import {firebase} from "../../firebase/config"
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles.js'
export default function ComplainScreen({ navigation }) {
    const bg1 = { uri: "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" };

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
        <View >
            <Appbar.Header styles={styles.header}>
            <Appbar.Content title="Complains" onPress={() => navigation.navigate('Home')}/>
            </Appbar.Header>
<View style={styles.complainContainer}   > <ImageBackground source={bg1} resizeMode="cover" style={{width: '100%', height: '100%',flex: 1,justifyContent: "center"}}></ImageBackground>   </View>
<View style={styles.complainContainer}   >    </View>
<View style={styles.complainContainer}   >    </View>
</View>
    );
}