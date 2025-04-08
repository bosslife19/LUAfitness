import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import SectionsLogin from '../../../styles/Login/Login.styles';
import { useRequest } from '../../../hooks/useRequest';


const AdditionalInfo = ({onNext}) => {
  const {makeRequest} = useRequest();
  const [additionalInfo, setAddInfo] = useState('')
    const handleNext = async()=>{
      if(!additionalInfo) return onNext();
      const {response} = await makeRequest('/register', {additionalInfo});
      if(response) return onNext();
      Alert.alert('Error', 'Server error')
    }
    return (
        <View>
            <Text style={styles.TitleHeader}>
            Additional information
            </Text>
            <Text style={styles.desc}>
            This helps us better understand your fitness journey
            </Text>
            <TextInput
             keyboardType="default"
                placeholder="Write your thoughts"
                style={styles.input}
                multiline={true} // Enables multi-line input
                numberOfLines={4} // Sets the default number of visible lines
                onChangeText={val=>setAddInfo(val)}
            />
             <TouchableOpacity
                    style={[SectionsLogin.loginButton]}
                    onPress={handleNext}
                  >
                    <Text
                      style={[
                        SectionsLogin.loginButtonText,
                        { fontFamily: "montserratMeduim" },
                      ]}
                    >
                      Proceed
                    </Text>
                  </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    desc: {
        color: "#64748B",
        fontFamily: "montserratMeduim",
        fontWeight: "500",
        fontSize: 14,
        maxWidth: "70%",
    },
    TitleHeader: {
        color: "#0F172A",
        fontSize: 26,
        fontWeight: "700",
        fontFamily: "montserratMeduim",
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingBottom: "30%", // Adjusted for better text entry spacing
        marginTop: 20,
        backgroundColor:"#F8F1FF",
        borderColor: "#ECDAFE",
        borderRadius: 10,
        textAlignVertical: "top", // Ensures text starts at the top (important for textarea-like behavior)
    },
});

export default AdditionalInfo;
