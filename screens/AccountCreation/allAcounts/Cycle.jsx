import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import RNPickerSelect from "react-native-picker-select";

const Cycles = () => {
      const [gender, setGender] = useState("");
    
    return (
        <View>
            <Text style={styles.TitleHeader}>
            How regular is your cycle?
            </Text>

            <Text style={styles.desc}>
            Track your cycle regularity pattern
             </Text>
        <View style={styles.inputContainer}>
        <RNPickerSelect
        // value={gender}
          onValueChange={(value) => setGender(value)}
          items={[
            { label: "Regular", value: "Regular" },
            
          ]}
          placeholder={{ label: "Regular ", value: null }}
          style={pickerStyles}
        />
      </View>        
      </View>
    );
}

const styles = StyleSheet.create({
    desc:{
        color:"#64748B",
        fontFamily:"montserratMeduim",
        fontWeight:500,
        fontSize:14,
       maxWidth:"80%"
    },
    TitleHeader:{
        color:"#0F172A",
        fontSize:26,
        fontWeight:700,
        fontFamily:"montserratMeduim",
        marginBottom:10
    },
    inputContainer:{
        borderWidth:1,
        borderColor:"#ECDAFE",
        borderRadius:30
    },
    input:{
         paddingLeft:20,
         paddingBottom:20,
         paddingTop:20,
         marginTop:20,
    }
})

// Custom picker styles
const pickerStyles = {
  inputIOS: {
    fontSize: 14,
    paddingVertical: 10,
    color: "#0F172A",
    fontFamily: "montserratMeduim",
  },
  inputAndroid: {
    fontSize: 14,
    paddingVertical: 5,
    color: "#0F172A",
    fontFamily: "montserratMeduim",
  },
};
export default Cycles;
