import { Alert, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View,Image, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import {firebase} from "../../firebase/config"
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles.js'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import * as ImagePicker from "expo-image-picker"
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView from "react-native-maps"
const SuggesstionScreen = ({navigation}) => {
    const options = ["general", "electicity", "garbage"]

    const[type,setType]=useState('')
    const [name,setname]=useState('')
    const [desc,setdesc]=useState('')
    const [image,setImage]=useState(null)
    const [uploading,setUploading]=useState(false)
    const [page,setPage]=useState(1)
    const[longitude,setLongitute]=useState(0)
    const[latitude,setLatitude]=useState(0)
    const [list,setList]=useState([])
const ref=firebase.firestore().collection('suggestions')
var handlesubmit= async ()=>{
    UploadImage()
    await  ref.add({type:type,municipalityname:name,description:desc,image:image,location:{latitude:latitude,longitude:longitude}})
    alert("added successfully")
    console.log("image "+image.uri)
  
}
useEffect(()=>{
    return ref.onSnapshot(querysnapshot=>{
        querysnapshot.forEach(doc=>{
            list.push({
                id:doc.data().id,
                type:doc.data().type,
                image:doc.data().image,
                municipalityname:doc.data().municipalityname,
                description:doc.data().description
            })
        })
        setList(list)
    })
},[])
const PickImage=async () =>{
   let result=await ImagePicker.launchImageLibraryAsync({
    mediaTypes:ImagePicker.MediaTypeOptions.All,
    allowsEditing:true,
    aspect: [4,3],
    quality:1
})
   const source= {uri: result.uri}
    console.log(source)
    setImage(source)
}    
const UploadImage=async()=>{
    setUploading(true)
    const response=await fetch(image.uri)
    const blob=await response.blob()
    const filename=image.uri.substring(image.uri.lastIndexOf('/')+1)
    var ref=firebase.storage().ref().child(filename).put(blob)
    try{
        await ref
    }
    catch(e){
        console.log(e)
    }
    setUploading(false)
    Alert.alert(
        'photo uploaded'
        )
        setImage(null)
    }
    // No permissions request is necessary for launching the image library
    
    return (
        
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
        
      
        {page===1?(
            <View>
           <View><TouchableOpacity onPress={()=>{setPage(page+1)}}><Text>add a sugg</Text></TouchableOpacity></View>
            <FlatList data={list} renderItem={({item})=>(
            <View>
            <Text>
            {item.type}
            </Text>
            <Text>
            {item.description}
            </Text>
            </View>
        )} />
        </View>
        ):null}
        <View style={styles.inputcontainer}>
        {page===2 ? <SelectDropdown
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
            />:page===3?(<View><MapView ></MapView></View>)
    : page===4?(<View><TextInput style={styles.input} value={desc} onChangeText={setdesc} placeholder='description ' />
   <SafeAreaView>
   
   <TouchableOpacity onPress={PickImage}><Text>pick an Image </Text></TouchableOpacity>
   {image&&(<View><Image source={{uri:image.uri}} style={{width:300,height:300}}/></View>)}

   
   </SafeAreaView>
     {/*<TouchableOpacity onPress={UploadImage} ><Text>UploadImage </Text></TouchableOpacity>*/}
     </View> 
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
    {page==2&&page<3?(<View style={styles.button}><TouchableOpacity style={styles.but} onPress={()=>setPage(page+1)}><Text>next</Text></TouchableOpacity></View>):null}
    {page>1?(<View style={styles.button}><TouchableOpacity style={styles.but} onPress={()=>setPage(page-1)}><Text>back</Text></TouchableOpacity></View>):null}
    {page===3? (<View style={styles.button}><TouchableOpacity style={styles.but} onPress={()=>handlesubmit()}><Text style={styles.buttontext}>submit</Text></TouchableOpacity></View>):null} 
</View>
    </KeyboardAvoidingView>
  )
}

export default SuggesstionScreen
