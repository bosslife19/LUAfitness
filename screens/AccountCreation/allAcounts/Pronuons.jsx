import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import RNPickerSelect from "react-native-picker-select";

const Pronouns = () => {
      const [gender, setGender] = useState("");
    
    return (
        <View>
            <Text style={styles.TitleHeader}>
            Your pronouns
            </Text>

            <Text style={styles.desc}>
            Choose the pronouns you would like to be referred
             </Text>
        <View style={styles.inputContainer}>
        <RNPickerSelect
        // value={gender}
          onValueChange={(value) => setGender(value)}
          items={[
            { label: "He/Him", value: "He/Him" },
            { label: "She/Her", value: "She/Her" },
            { label: "Other", value: "other" },
          ]}
          placeholder={{ label: " He/Him", value: null }}
          style={pickerStyles}
        />
      </View>        
      </View>
    );
}

const styles = StyleSheet.create({
    desc:{
        color:"#64748B",
        fontFamily:"montserrat",
        fontWeight:500,
        fontSize:14,
       maxWidth:"80%"
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
        fontFamily:"montserrat",
        marginBottom:10
    },
    input:{
         borderWidth:1,
         paddingLeft:20,
         paddingBottom:20,
         paddingTop:20,
         marginTop:20,
         borderColor:"#ECDAFE",
         borderRadius:30
    }
})

// Custom picker styles
const pickerStyles = {
  inputIOS: {
    fontSize: 14,
    paddingVertical: 10,
    color: "#0F172A",
    fontFamily: "montserrat",
  },
  inputAndroid: {
    fontSize: 14,
    paddingVertical: 5,
    color: "#0F172A",
    fontFamily: "montserrat",
  },
};
export default Pronouns;
