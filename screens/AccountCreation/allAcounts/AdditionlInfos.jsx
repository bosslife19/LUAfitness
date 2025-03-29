import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
 
const AdditionlInfos = () => {
     
    return (
        <View style={{marginBottom:"30%"}}>
            <Text style={styles.TitleHeader}>
            Additional information
            </Text>

            <Text style={styles.desc}>
            This space is for sharing any other health information
             </Text>
             <Text style={[styles.desc,{marginTop:"10%",fontWeight:"700",color:"#0F172A"}]}>
             Is there anything else about your health that would help us support your movement journey?
             </Text>
            <TextInput
               keyboardType="default"
               placeholder="Write your thoughts"
               style={styles.input}
               multiline={true} // Enables multi-line input
               numberOfLines={4} // Sets the default number of visible lines
             />       
      </View>
    );
}

const styles = StyleSheet.create({
    desc:{
        color:"#64748B",
        fontFamily:"montserratMeduim",
        fontWeight:500,
        fontSize:14,
       maxWidth:"82%"
    },
    inputContainer:{
      borderWidth:1,
      borderColor:"#ECDAFE",
      borderRadius:30,
      backgroundColor:"#F8F1FF",
      marginTop:"10%"
  },
    TitleHeader:{
        color:"#0F172A",
        fontSize:26,
        fontWeight:700,
        fontFamily:"montserratMeduim",
        marginBottom:10
    },
    input:{
      borderWidth: 1,
      paddingHorizontal: 15,
      paddingBottom: "30%", // Adjusted for better text entry spacing
      marginTop: 20,
      backgroundColor:"#F8F1FF",
      borderColor: "#ECDAFE",
      borderRadius: 10,
      textAlignVertical: "top", // Ensures text starts at the top (important for textarea-like behavior)

    }
})

 
export default AdditionlInfos;
