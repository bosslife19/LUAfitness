import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, Alert } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Ionicons } from "@expo/vector-icons";
import SectionsLogin from "../../../styles/Login/Login.styles";
import axios from "axios";
import axiosClient from "../../../axiosClient";

export default function PersonalizationDetails({ onNext }) {
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [fitnessLevel, setFitnessLevel] = useState("");
  const [fitnessGoals, setFitnessGoals] = useState("");

  const handleProceed =async ()=>{
    try {
      const res = await axiosClient.post(`/register`,{
        dob,gender,fitnessLevel,fitnessGoals
       })
       if(res.data.status){
      // if sucessfull it will go to the next page
     
      return onNext();  
       }
    } catch (error) {
      Alert.alert('Error', 'Please check your internet connection')
      console.log(error)
    }
 

 
    
  }

  const handleSkip =() =>{

    // if it will skip to the next page
    onNext(); 
 }
  return (
    <View style={{ paddingHorizontal: "5%" }}>
       <Text 
         style={[
              SectionsLogin.welcomeText,
              {
                fontFamily: "montserratMeduim",
                color: "#0F172A",
                lineHeight: 43.95,
                // fontSize:26,
                 fontWeight: "700",
              },
            ]}
        >
       Personalization Details
        </Text>
       
           <Text style={[ SectionsLogin.welcomeText,
            {
              fontFamily: "montserratMeduim",
              color: "#475569",
              fontSize:14,
              paddingHorizontal:30,
              // lineHeight: 43.95,
              fontWeight: "500",
              marginTop:5,
              marginBottom:15 
            }
          ]}>
           Tell us more about yourself to personalize your experience
        </Text>
      {/* Date of Birth */}
      <View style={[styles.inputContainer,{paddingVertical: Platform.OS === "ios" ? 15 : 7,}]}>
        <TextInput
          style={styles.input}
          placeholder="Date of Birth "
          placeholderTextColor="#94A3B8"
          value={dob}
          onChangeText={setDob}
          keyboardType="numeric"
        />
      </View>

      {/* Gender Dropdown */}
      <View style={styles.inputContainer}>
        <RNPickerSelect
          onValueChange={(value) => setGender(value)}
          items={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Other", value: "other" },
          ]}
          placeholder={{ label: " Gender", value: null }}
          style={pickerStyles}
        />
      </View>

      {/* Fitness Level Dropdown */}
      <View style={styles.inputContainer}>
        <RNPickerSelect
          onValueChange={(value) => setFitnessLevel(value)}
          items={[
            { label: "Beginner", value: "beginner" },
            { label: "Intermediate", value: "intermediate" },
            { label: "Advanced", value: "advanced" },
          ]}
          placeholder={{ label: " Fitness Level", value: null }}
          style={pickerStyles}
        />
      </View>

      {/* Fitness Goals Dropdown */}
      <View style={styles.inputContainer}>
        <RNPickerSelect
          onValueChange={(value) => setFitnessGoals(value)}
          items={[
            { label: "Weight Loss", value: "weight_loss" },
            { label: "Muscle Gain", value: "muscle_gain" },
            { label: "General Fitness", value: "general_fitness" },
          ]}
          placeholder={{ label: " Fitness Goal", value: null }}
          
          style={pickerStyles}
        />
      </View>

      {/* Proceed Button */}
      <TouchableOpacity style={styles.button} onPress={handleProceed}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.btns} onPress={handleSkip} >
                  <Text style={[styles.buttonText,{color:"#8A2BE2"}]}>Skip</Text>
         </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "montserratMeduim",
    color: "#0F172A",
    textAlign: "center",
    marginBottom: 10,
  },
  inputContainer: {
    paddingVertical: Platform.OS === "ios" ? 15 : 0,
    borderWidth: 1,
    borderColor: "#ECDAFE",
    borderRadius: 30,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  input: {
    fontSize: 14,
    fontFamily: "montserratMeduim",
    color: "#0F172A",
  },
  button: {
    backgroundColor: "#8A2BE2",
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    textAlign:"center",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "montserratMeduim",
  },
  btns: {
    marginTop:15,
    width: "100%",
    paddingVertical: 17,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#8A2BE2",
  },
});

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
