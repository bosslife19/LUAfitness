import { Entypo, Feather, MaterialIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Trans from '../../../styles/Traning/TranExec';
const image = require('../../../assets/images/Rectangle 180.png');
const flue = require('../../../assets/images/fitness/fluent_dumbbell-24-filled.png');
const gym = require('../../../assets/images/healthicons_exercise-bicycle (1).png');
const sched = require('../../../assets/images/fitness/ion_time-sharp.png');
import { useNavigation } from '@react-navigation/native';

const ExerciseDetails = ({img}) => {
    // const {  title, equipment, duration, level } = useLocalSearchParams();

    const [expanded, setExpanded] = useState(false);

    const instructions = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
     non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
     non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.` ;

    const truncatedText = instructions.length > 100 ? `${instructions.slice(0, 100)}...` : instructions;
    const navigation = useNavigation(); // Get navigation object

    return (
        <View style={{flex:1,backgroundColor:"#F8FAFC"}}>
        <ScrollView style={styles.container}>
             <Image source={image} style={styles.image} resizeMode="cover" />
            {/* back button */}
             <TouchableOpacity style={{position:"absolute",top:50,left:20}} onPress={() => navigation.goBack()}>
                <MaterialIcons name="arrow-back-ios" size={21}  color="#fff" />
            </TouchableOpacity>
            {/* Edit button */}
            <TouchableOpacity style={{position:"absolute",right:20,top:50,backgroundColor:"#C1C1C133",padding:8,borderRadius:30}}>
             <Feather name="edit-3" size={12} color="#fff" />
          </TouchableOpacity>
          {/* play button */}
          <TouchableOpacity style={[Trans.favButton,{position:"absolute",right:"50%",top:"20%",backgroundColor:"#C1C1C133",padding:8,borderRadius:30}]}  >
             <Entypo name="controller-play" size={24} color="#fff" />
         </TouchableOpacity>
         {/* Name */}
         <View style={{position:"absolute",right:"50%",top:50, padding:8,borderRadius:30}}>
            <Text style={{color:"#fff",letterSpacing:1,fontFamily:"montserratMeduim",}}>Curis</Text>
         </View>


            <View style={[styles.detailsContainer,{margin:15}]}>
               <View style={[styles.equipmentContainer, { gap: 6,flexWrap:"wrap" }]}>
                  <View style={styles.equipmentContainer}> 
                       <Image source={flue} resizeMode="contain" style={styles.icon} />
                      <Text style={styles.equipmentText}>Dumbbell, Yoga mat</Text>
                  </View>
                    <View style={styles.equipmentContainer}>
                     <Image source={sched} resizeMode="contain" style={styles.icon} />
                    <Text style={styles.equipmentText}>30 Minutes</Text>
                    </View>
                    <View style={styles.equipmentContainer}>
                     <Image source={gym} resizeMode="contain" style={styles.icon} />
                    <Text style={styles.equipmentText}>30 Minutes</Text>
                    </View>
             </View>
            
             <View style={ {marginBottom:0}}>
                <Text style={{fontWeight:"700",fontSize:17,marginTop:10,fontFamily:"montserratMeduims"}}>Instructions</Text>
                <Text style={{color:"#475569",fontFamily:"montserratMeduims"}}>
                {expanded ? instructions : truncatedText}
                 </Text>
                 {instructions.length > 500 && (
                            <TouchableOpacity onPress={() => setExpanded(!expanded)}>
                                <Text style={styles.readMore}>
                                    {expanded ? " " : ""}
                                </Text>
                            </TouchableOpacity>
                        )}
             </View>
             </View>

            <View style={[styles.detailsContainer,{marginHorizontal:20}]}>
                <Text style={{fontWeight:"700",fontSize:17 ,fontFamily:"montserratMeduims"}}>
                    Targeted muscles
                </Text>
                <Text style={{fontWeight:"700",fontSize:15,marginTop:10,fontFamily:"montserratMeduims"}}>
                    Working Muscles:
                    <Text style={{fontWeight:"400",fontSize:14,marginTop:10,fontFamily:"montserratMeduims"}}> Bicep Brachii, Brachil</Text>
                </Text>

                <Text style={{fontWeight:"700",fontSize:15,marginTop:10,fontFamily:"montserratMeduims",display:"flex"}}>
                    Suporting muscles:
               
                <Text style={{fontWeight:"400",fontSize:15,marginTop:10,fontFamily:"montserratMeduims"}}>
                 Brachioradialis, Forearm Flexors and Extensors, Deltoid               
                 </Text>
                 </Text>
             </View>

             <View style={[styles.detailsContainer,{marginHorizontal:20,marginTop:15}]}>
             <Text style={{fontWeight:"700",fontSize:17,fontFamily:"montserratMeduims",lineHeight:30}}>Trainers note</Text>
                <Text style={{color:"#475569",fontFamily:"montserratMeduims"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
             </View>
            
                 
            
        </ScrollView>
        <TouchableOpacity style={styles.button} onPress={()=> router.push("(routes)/workout/edit-workout")}>
                <Text style={styles.buttonText}>Favorite Exercise</Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {   backgroundColor:"#F8FAFC" ,},
    image: { width: '100%', height: 500 },
    detailsContainer: {padding:15,  backgroundColor:"#fff" },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
    label: { fontSize: 16, fontWeight: 'bold', marginTop: 5 },
    info: { fontWeight: 'normal' },
    equipmentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 2,
    },
    icon: {
        width: 12.27,
        height: 12.27,
        marginRight: 4,
    },
    equipmentText: {
        fontSize: 11,
        fontFamily: "montserratMeduim",
        color: '#334155',
    },
    button: {
        margin:13,
        backgroundColor: "#8A2BE2",
        padding: 15,
        borderRadius: 30,
        alignItems: "center",
      },
      buttonText: {
        color: "#fff",
        fontSize: 14,
        padding: 4,
        fontFamily: "montserratMedium",
        fontWeight: "bold",
      },
});

export default ExerciseDetails;
