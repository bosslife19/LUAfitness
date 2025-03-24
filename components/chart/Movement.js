import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { ProgressCircle } from "react-native-svg-charts";
 
const Movement = () => {
  const percentage = 0.65; // 65% usage

  return (
    <>
      
      {/* Radial Chart */}
      <View style={styles.chartContainer}>
        <ProgressCircle
               style={styles.chart}
               progress={percentage}
               progressColor={"#7F56D9"}
               backgroundColor="#E5E7EB"
               strokeWidth={8}
             />
        <View style={styles.chartLabel}>
          <Text style={styles.chartValue}>240%</Text>
         </View>
      </View>

     
    </>
  );
};

 
const styles = StyleSheet.create({
  
  chartContainer: {
    alignItems: "center",
    // marginVertical: 20,
    // position: "relative",
  },
  chart: {
    height: 50,
    width: 50,
  },
  chartLabel: {
    position: "absolute",
    // alignItems: "center",
    // justifyContent: "center",
    top: "40%",
  },
  chartValue: {
    fontSize: 10,
    fontWeight: "700",
    color: "#1D2939",
  },
  chartLabelText: {
    fontSize: 14,
    color: "#475467",
    fontWeight: "500",
  },
  footer: {
    marginTop: 10,
    alignItems: "center",
  },
  footerTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1D2939",
  },
  footerText: {
    fontSize: 14,
    color: "#475467",
    textAlign: "center",
  },
});

export default Movement;
