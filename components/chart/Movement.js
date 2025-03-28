import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ProgressCircle } from "react-native-svg-charts";

const Movement = ({
  progress = 0.65, // Default progress (65%)
  label,
  progressColor ,
  bgColor = "#E5E7EB",
  size,
  strokeWidth = 5,
}) => {
  return (
    <View style={[styles.chartContainer, { width: size, height: size }]}>
      <ProgressCircle
        style={{ height: size, width: size }}
        progress={progress}
        progressColor={progressColor}
        backgroundColor={bgColor}
        strokeWidth={strokeWidth}
      />
      <View style={styles.chartLabel}>
        <Text style={styles.chartValue}>
          {label ? label : `${Math.round(progress * 100)}%`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  chartLabel: {
    position: "absolute",
    // top: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  chartValue: {
    fontSize: 10,
    fontWeight: "700",
    color: "#1D2939",
  },
});

export default Movement;
