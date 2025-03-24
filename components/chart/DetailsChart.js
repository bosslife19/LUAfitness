import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ProgressCircle } from "react-native-svg-charts";

const DetailsChart = () => {
  const percentage = 0.25; // 25% usage

  return (
    <View style={styles.chartContainer}>
      {/* Full Circle Progress Chart */}
      <ProgressCircle
        style={styles.chart}
        progress={percentage}
        progressColor={"#7F56D9"}
        backgroundColor="#E5E7EB"
        strokeWidth={8}
      />
      <View style={styles.chartLabel}>
        <Text style={styles.chartValue}>20%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  chart: {
    height: 50, // Increase size for better visibility
    width: 50,
  },
  chartLabel: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  chartValue: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1D2939",
  },
});

export default DetailsChart;
