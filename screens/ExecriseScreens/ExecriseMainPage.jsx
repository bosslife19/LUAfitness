import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const image = require('../../assets/images/fitness/Group 11094.png');
const flue = require('../../assets/images/fitness/fluent_dumbbell-24-filled.png');
const fav = require('../../assets/images/fitness/fav.png');
const sched = require('../../assets/images/fitness/ion_time-sharp.png');
const location = require('../../assets/images/fitness/location.png');

const ExerciseMainPage = () => {
    return (
        <View style={styles.page}>
            <ScrollView>
                <View style={styles.container}>
                    <TouchableOpacity 
                        onPress={() => router.push({
                            pathname: '/(routes)/exercise/ProductDetails', 
                            params: {
                                title: 'Bicep Curls - Arms',
                                equipment: 'Dumbbell, Yoga mat',
                                duration: '30 Minutes',
                                level: 'Intermediate',
                                imageId: 'group11094', // Instead of passing the image directly
                            }
                        })}
                    >
                        <View style={[styles.imageContainer, { position: "relative" }]}>
                            <Image source={image} resizeMode="cover" style={styles.mainImage} />
                            <TouchableOpacity style={styles.favButton} onPress={() => router.push("/(routes)/exercise/execriseSaved")}>
                                <Image source={fav} resizeMode="contain" style={styles.favIcon} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.details}>
                        <Text style={styles.title}>Bicep Curls - Arms</Text>
                        <View style={[styles.equipmentContainer, { gap: 20 }]}>
                            <View style={styles.equipmentContainer}>
                                <Image source={flue} resizeMode="contain" style={styles.icon} />
                                <Text style={styles.equipmentText}>Dumbbell, Yoga mat</Text>
                            </View>
                            <View style={styles.equipmentContainer}>
                                <Image source={sched} resizeMode="contain" style={styles.icon} />
                                <Text style={styles.equipmentText}>30 Minutes</Text>
                            </View>
                        </View>
                        <View style={styles.equipmentContainer}>
                            <Image source={location} resizeMode="contain" style={styles.icon} />
                            <Text style={styles.equipmentText}>Intermediate</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    page: { flex: 1 },
    container: {
        marginVertical: 13,
        marginHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    imageContainer: {
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        overflow: 'hidden',
    },
    mainImage: {
        width: '100%',
        height: 250,
    },
    favButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        // backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 5,
        // borderRadius: 50,
    },
    favIcon: {
        width: 25,
        height: 25,
    },
    details: {
        paddingHorizontal: 10,
        paddingBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: "montserratMedium",
        marginVertical: 10,
    },
    equipmentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 2,
    },
    icon: {
        width: 15,
        height: 15,
        marginRight: 5,
    },
    equipmentText: {
        fontSize: 12,
        fontFamily: "montserratMedium",
        color: '#334155',
    },
});

export default ExerciseMainPage;
