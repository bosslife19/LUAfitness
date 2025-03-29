import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Header from '../../header/Header'
import edit from "../../../assets/images/account/mingcute_edit-fill.png";
import Transes from '../../../styles/Traning/Transes';
import home from "../../../assets/images/logo.png";
import { MaterialIcons } from '@expo/vector-icons';

export default function Profile() {
  return (
    <>
     <Header name="Profile management" arrow="arrow-back" />
     <View style={{marginHorizontal:20,backgroundColor:"#F1F5F9"}}>

    
     <TouchableOpacity  onPress={()=> router.push("/(routes)/profile/profilemanagement")} style={{position:"relative", justifyContent:"center",alignItems:"center",marginVertical:20,backgroundColor:"#fff",paddingVertical:20,borderRadius:10}}>
       <View style={{borderWidth:4,borderLeftColor:"#8A2BE2",borderTopColor:"#8A2BE2",borderBottomColor:"#8A2BE2",borderRightColor:"#fff",borderRadius:40}}>
        <Image source={home} style={{width:69,height:69}} />
        </View>
        <Image source={edit} style={{width:19,height:19,position:"absolute",top:50,right:"37%"}} />

       </TouchableOpacity>

       <View style={{backgroundColor:"#fff"}}>
       <View  style={{borderBottomWidth:1,borderColor:"#F1F5F9", flexDirection:"row",justifyContent:"space-between",marginVertical:1,backgroundColor:"#fff",paddingVertical:10,borderRadius:10,paddingHorizontal:10}}>
       <View style={{ width:"90%"}}>
       <Text>Oliver Sandra</Text>
         <TextInput
            keyboardType="default"
            placeholder="Name"
            style={{width:"100%",backgroundColor:"#fff"}}
           />    
       </View>
       <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
       </View>

       <View  style={{borderBottomWidth:1,borderColor:"#F1F5F9", flexDirection:"row",justifyContent:"space-between",marginVertical:1,backgroundColor:"#fff",paddingVertical:10,borderRadius:10,paddingHorizontal:10}}>
       <View style={{ width:"90%"}}>
       <Text>Oliver2com@gmail.com</Text>
         <TextInput
            keyboardType="default"
            placeholder="Email address"
            style={{width:"100%",backgroundColor:"#fff"}}
           />    
       </View>
       <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
       </View>

       <View  style={{borderBottomWidth:1,borderColor:"#F1F5F9", flexDirection:"row",justifyContent:"space-between",marginVertical:1,backgroundColor:"#fff",paddingVertical:10,borderRadius:10,paddingHorizontal:10}}>
       <View style={{ width:"90%"}}>
       <Text>+1 3548353463</Text>
         <TextInput
            keyboardType="default"
            placeholder="mobile number"
            style={{width:"100%",backgroundColor:"#fff"}}
           />    
       </View>
       <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
       </View>

       <View  style={{borderBottomWidth:1,borderColor:"#F1F5F9", flexDirection:"row",justifyContent:"space-between",marginVertical:1,backgroundColor:"#fff",paddingVertical:20,borderRadius:10,paddingHorizontal:10}}>
       <View style={{ width:"90%"}}>
       <Text>*************</Text>
         <TextInput
            keyboardType="default"
            placeholder="password"
            style={{width:"100%",backgroundColor:"#fff"}}
           />    
       </View>
       <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
       </View>
       </View>
       <TouchableOpacity style={Transes.button}  >
         <Text style={Transes.buttonText}> Update</Text>
         </TouchableOpacity>
     <View>

     </View>
       </View>
    </>
  )
}

const styles = StyleSheet.create({

})