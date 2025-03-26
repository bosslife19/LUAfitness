import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";

const ProgressChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], // X-axis (Days of the week)
    datasets: [
      {
        data: [0,2, 4, 6, 8, 8,3], // Y-axis (Hours of workout)
        color: (opacity = 1) => `rgba(127, 86, 217, ${opacity})`, // Line color
        strokeWidth: 4, // Increase line thickness
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Workout Progress</Text>
      <LineChart
        data={data}
        width={Dimensions.get("window").width - 20} // Increase width
        height={250}
        yAxisSuffix="h" // Add "h" for hours on Y-axis
        yAxisInterval={1} // Steps on the Y-axis
        yLabelsOffset={40} // Move Y-axis labels to the right
        xLabelsOffset={-10} // Shift X-axis labels slightly
        chartConfig={{
          backgroundColor: "#f5f5f5",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 0, // No decimal points
          color: (opacity = 1) => `rgba(127, 86, 217, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: { borderRadius: 10 },
          propsForDots: {
            r: "0", // Remove dots
          },
        }}
        bezier // Smooth curve
        style={{ borderRadius: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    // elevation: 3,
    marginHorizontal: 10,
    marginVertical:8,
    // alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default ProgressChart;
