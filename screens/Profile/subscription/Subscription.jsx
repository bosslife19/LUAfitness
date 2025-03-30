import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../header/Header';
import img from "../../../assets/images/account/Rectangle 5944.png"
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
const Subscription = () => {
        const navigation = useNavigation(); // Get navigation object
    
    return (
        <View style={{}}>
            <View style={[styles.headerContainer]}>
            {/* Go Back Button */}
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons name="arrow-back-ios" size={21} color="#000" />
            </TouchableOpacity>

            {/* Centered Title */}
            <Text style={styles.headerText}>Subscription</Text>
           </View>
           <Text>Select your plan to get connected</Text>
           <Text>
           Join a community built on encouragement and understanding
           </Text>
           <View>
            <Text>
                Basic plan
            </Text>
            <Text>Free</Text>
            <View>
                <View>
                    <Text>Personalized Training Plans</Text>
                </View>
            </View>
           </View>
        {/* <Image source={img} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: "15%",
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderColor: "#F1F5F9",
    },
    headerText: {
        flex: 0.9,
        fontSize: 16,
        fontWeight: "700",
        textAlign: "center",
        fontFamily: "montserratMeduim"
    },
})

export default Subscription;
