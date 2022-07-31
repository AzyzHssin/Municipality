import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {firebase} from "../../firebase/config"
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles.js'
const SuggesstionScreen = ({navigation}) => {
    const options = ["general", "electicity", "garbage"]

    const[type,setType]=useState('')
    const [name,setname]=useState('')
    const [desc,setdesc]=useState('')
    const [page,setPage]=useState(1)
const ref=firebase.firestore().collection('suggestions')
var handlesubmit= async ()=>{
  await  ref.add({type:type,municipalityname:name,description:desc})
  alert("added successfully")
  
}
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
    <View style={styles.inputcontainer}>
    {page===1 ? <SelectDropdown
        data={options}
        onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
            setType(selectedItem)
    
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
            
            return selectedItem
        }}
        rowTextForSelection={(item, index) => {
            
            return item
        }}
        renderDropdownIcon={isOpened => {
            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
          }}
          defaultButtonText={'Select type '}
    />:page===2 ?<TextInput style={styles.input} value={name} onChangeText={setname} placeholder='municipality name ' />
    : page===3?(<TextInput style={styles.input} value={desc} onChangeText={setdesc} placeholder='description ' />
    ):null}
   {/* {page<3?(
        <View style={styles.button}>
        <TouchableOpacity style={styles.but} onPress={()=>{
        const nextpage=page+1
        setPage(nextpage)
    }}><Text style={styles.buttontext}>next</Text></TouchableOpacity></View>):null} */}
 {/*{page ===3? (<View style={styles.button}><TouchableOpacity style={styles.but} onPress={()=>handlesubmit()}><Text style={styles.buttontext}>submit</Text></TouchableOpacity></View>):null} */}
  
{/*{page>1?(<TouchableOpacity onPress={()=>{setPage(page-1)}}><Text>back</Text></TouchableOpacity>):null}*/}


    </View>
    <View style={styles.buttoncontainer}>
    {page<3?(<View style={styles.button}><TouchableOpacity style={styles.but} onPress={()=>setPage(page+1)}><Text>next</Text></TouchableOpacity></View>):null}
    {page>1?(<View style={styles.button}><TouchableOpacity style={styles.but} onPress={()=>setPage(page-1)}><Text>back</Text></TouchableOpacity></View>):null}
    {page ===3? (<View style={styles.button}><TouchableOpacity style={styles.but} onPress={()=>handlesubmit()}><Text style={styles.buttontext}>submit</Text></TouchableOpacity></View>):null} 

    </View>
    </KeyboardAvoidingView>
  )
}

export default SuggesstionScreen
