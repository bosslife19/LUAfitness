import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Header from '../../header/Header';
import ProgressChart from '../../../components/chart/ProgressOverViewChart';
import circle from "../../../assets/images/fitness/ri_progress-5-fill.png"
import { Text } from 'react-native';
const ProgressOverViewDetails = () => {
    return (
        <View style={{backgroundColor:"#F8FAFC",height:"100%"}}>
         <Header name="Progress overview" arrow="arrow-back" />
         <ProgressChart/>
         <View style={{marginBottom:15, marginHorizontal:20,backgroundColor:"#fff",paddingVertical:20,paddingHorizontal:10,flexDirection:"row", alignItems:"flex-start", gap:10}}>
            <View style={{backgroundColor:"#F6EDFF", width:40,padding:10}}>
            <Image source={circle}  style={{width:20,height:20}} resizeMode='contain' />
            </View>
             <View>
            <Text>
                Current streak
            </Text> 
            <Text>
            180 Calories Burn | 20minutes
            </Text>
            </View>
         </View>
         <View style={{marginHorizontal:20,backgroundColor:"#fff",paddingVertical:20,paddingHorizontal:10,flexDirection:"row", alignItems:"flex-start", gap:10}}>
            <View style={{backgroundColor:"#F6EDFF", width:40,padding:10}}>
            <Image source={circle}  style={{width:20,height:20}} resizeMode='contain' />
            </View>
             <View>
            <Text>
                Current streak
            </Text> 
            <Text>
            180 Calories Burn | 20minutes
            </Text>
            </View>
         </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ProgressOverViewDetails;
