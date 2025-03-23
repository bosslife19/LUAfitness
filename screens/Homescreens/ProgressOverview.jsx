import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
 import Monthly from '../../components/chart/Monthly';
import Current from '../../components/chart/current';
import Movement from '../../components/chart/Movement';

const ProgressOverview = () => {
    return (
        <View style={styles.bg}>
            <View style={styles.flexD}>
                <View>
                    <Text>Monthly completion</Text>
                    <Text>18 exercises</Text>
                </View>
                 {/* Chart */}
                <Monthly/>
            </View>
            <View style={styles.flexD}>
                <View>
                    <Text>Current streak</Text>
                    <Text>7 days</Text>
                </View>
                {/* Chart */}
                <Current/>
            </View>
            <View style={styles.flexD}>
                <View>
                    <Text>Movement Minutes</Text>
                    <Text>18 minutes</Text>
                </View>
                 {/* Chart */}
                <Movement/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bg:{
        backgroundColor:"#fff",
         borderRadius:20,
        marginHorizontal:5,
        paddingHorizontal:10,
    },
    flexD:{
        marginTop:5,
        flexDirection: "row",
        gap:5,
        paddingVertical:13,
        borderBottomWidth:1,
        borderColor:"#F1F5F9",
        justifyContent: "space-between",
        alignItems: "center",
      },
})

export default ProgressOverview;
