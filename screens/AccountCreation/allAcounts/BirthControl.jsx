import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const BirthControl = () => {
    return (
        <View>
            <Text style={styles.TitleHeader}>
            Birth Control
            </Text>
            <Text style={styles.desc}>
            If you take birth control, please specify the form you are using.
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

export default BirthControl;
