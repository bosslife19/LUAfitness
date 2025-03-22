import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const PreferedName = () => {
    return (
        <View>
            <Text style={styles.TitleHeader}>
            Preferred name            
            </Text>

            <Text style={styles.desc}>
            What name feels most comfortable?           
             </Text>
            <TextInput placeholder="Preferred name" style={styles.input} />
        </View>
    );
}

const styles = StyleSheet.create({
    desc:{
        color:"#64748B",
        fontFamily:"montserrat",
        fontWeight:500,
        fontSize:14,
       maxWidth:"60%"
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

export default PreferedName;
