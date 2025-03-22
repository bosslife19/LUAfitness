import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Importing icon for checkmark

export default function Period( ) {
  const [selectedCycle, setSelectedCycle] = useState(null);

  const cycleOptions = [
    { label: "Monthly Period", value: "Monthly Period", text: "Select this option if you experience a monthly period." },
    { label: "No Period  (Birth Control)", value: "No Period  (Birth Control)", text: "Select this option if you stopped your period using birth control." },
    { label: "Perimenopause", value: "Perimenopause", text: "Select this option if you’re currently experiencing perimenopause. " },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Do you have a period?</Text>
      <Text style={styles.desc}>
      Please the options that best describes you.
        </Text>

      {/* Horizontal Scrollable Row */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {cycleOptions.map((option) => (
          <TouchableOpacity
            key={option.value}
            style={[
              styles.optionButton,
              selectedCycle === option.value && styles.selectedOption,
            ]}
            onPress={() => setSelectedCycle(option.value)}
          >
            {/* Real Checkbox - Green Box with Check Icon */}
            <View style={[styles.checkbox, selectedCycle === option.value && styles.checkedBox]}>
              {selectedCycle === option.value && <Ionicons name="checkmark" size={14} color="white" />}
            </View>

            <Text
              style={[
                styles.optionText,
                selectedCycle === option.value && styles.selectedOptionText,
              ]}
            >
              {option.label}
            </Text>
            <Text style={[styles.optionText,{color:"#64748B",fontWeight:500, fontSize:12}]}>{option.text}</Text>

          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: "2%",
    backgroundColor: "#F8EFFE",
    alignItems: "flex-start",
  },
  headerText: {
    color: "#0F172A",
    fontSize: 26,
    fontWeight: "700",
    fontFamily: "montserrat",
    marginBottom: 10,
    textAlign: "center",
  },
  desc: {
    color: "#64748B",
    fontFamily: "montserrat",
    fontWeight: "500",
    fontSize: 14,
    maxWidth:"80%",
    // textAlign: "center",
    marginBottom: 20,
  },
  scrollContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  optionButton: {
    width: 140,
    height:"100%",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 15,
    backgroundColor: "#F7EAFF",
    borderWidth: 1,
    borderColor: "#F6EDFF",
    alignItems: "center",
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: "#8A2BE2",
    flexDirection: "column",
    gap: 10, // Space between checkbox and text
  },
  optionText: {
    color: "#0F172A",
    fontSize: 15,
    fontFamily: "montserrat",
    fontWeight: "bold",
        textAlign: "center",
  },
  selectedOption: {
    
    // backgroundColor: "#E6D4FF",
  },
  selectedOptionText: {
    
    fontFamily: "montserrat",
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: "#8A2BE2",
    borderRadius: 50,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginLeft:"auto"
  },
  checkedBox: {
    backgroundColor: "#0D9488", // Green when selected
    borderColor: "#0D9488",
  },
});

 