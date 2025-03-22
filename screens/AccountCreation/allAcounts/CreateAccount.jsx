import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import MailIcon from '../../../assets/images/smstracking';
import Locks from '../../../assets/images/lock';
import { Ionicons } from '@expo/vector-icons';
import SectionsLogin from '../../../styles/Login/Login.styles';
import { Platform } from "react-native";
import Locks2 from '../../../assets/images/lock2';
import MailIcon2 from '../../../assets/images/smstracking2';

const CreateAccount = () => {
      const [isPasswordVisible, setPasswordVisible] = useState(false);
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [confirmpassword, setconfirmpassword] = useState("");
      
      const [isPasswordVisibles, setPasswordVisibles] = useState(false);
    
    return (
        <View style={{marginBottom:"20%"}}>
            <Text style={styles.TitleHeader}>
            Create your account
            </Text>
             <View style={[SectionsLogin.contains, 
            { borderColor: "#ECDAFE", borderWidth: 1 }]}>
          <MailIcon2/>
              <TextInput
                style={[
                  SectionsLogin.input,
                  { fontFamily: "montserrat", paddingHorizontal: 0 },
                  Platform.OS === "ios" && styles.iosPlaceholder, // Conditional styling for iOS
                ]}
                // keyboardType="email-address"
                value={email}
                placeholder="email Address"
                
                placeholderTextColor={Platform.OS === "ios" ? "#94A3B8" : undefined} 
                onChangeText={(value) => setEmail(value)}
              />
            </View>

            <View style={[SectionsLogin.contains, { borderColor: "#ECDAFE", borderWidth: 1 }]}>
            <Locks2/>
              <TextInput
                style={[
                  SectionsLogin.input,
                  { fontFamily: "montserrat", paddingHorizontal: 0 },
                  Platform.OS === "ios" && styles.iosPlaceholder, // Conditional styling for iOS
                ]}
                secureTextEntry={!isPasswordVisible}
                value={password}
                placeholder="password"
               
                placeholderTextColor={Platform.OS === "ios" ? "#94A3B8" : undefined} 
                onChangeText={(value) => setPassword(value)}
              />
              <TouchableOpacity
                style={[SectionsLogin.visibleIcon, { fontFamily: "montserrat" }]}
                onPress={() => setPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? (
                  <Ionicons
                    name="eye-off-outline"
                    size={20}
                    color={"#747474"}
                  />
                ) : (
                  <Ionicons name="eye-outline" size={20} color={"#747474"} />
                )}
              </TouchableOpacity>
            </View>

            {/* confirm password */}
            <View style={[SectionsLogin.contains, { borderColor: "#ECDAFE", borderWidth: 1 }]}>
            <Locks2/>
              <TextInput
                style={[
                  SectionsLogin.input,
                  { fontFamily: "montserrat", paddingHorizontal: 0 },
                  Platform.OS === "ios" && styles.iosPlaceholder, // Conditional styling for iOS
                ]}
                secureTextEntry={!isPasswordVisibles}
                value={confirmpassword}
                placeholder="Confirm password"
               
                placeholderTextColor={Platform.OS === "ios" ? "#94A3B8" : undefined} 
                onChangeText={(value) => setconfirmpassword(value)}
              />
              <TouchableOpacity
                style={[SectionsLogin.visibleIcon, { fontFamily: "montserrat" }]}
                onPress={() => setPasswordVisibles(!isPasswordVisibles)}
              >
                {isPasswordVisibles ? (
                  <Ionicons
                    name="eye-off-outline"
                    size={20}
                    color={"#747474"}
                  />
                ) : (
                  <Ionicons name="eye-outline" size={20} color={"#747474"} />
                )}
              </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    TitleHeader: {
        color: "#0F172A",
        fontSize: 22,
        fontWeight: "700",
        marginBottom: 10,
      },
      iosPlaceholder: {
        fontFamily: "montserrat", // Ensure the placeholder uses the same font
        color:'#aaa'
      },
})

export default CreateAccount;
