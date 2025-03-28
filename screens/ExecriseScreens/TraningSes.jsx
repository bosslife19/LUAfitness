import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../header/Header";

const AccordionItem = ({ title, imageSource, content }) => {
  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState(false);
  const [progress] = useState(new Animated.Value(0));

  useEffect(() => {
    if (expanded) {
      // Reset progress
      progress.setValue(0);
      setChecked(false);

      // Start countdown animation
      Animated.timing(progress, {
        toValue: 1,
        duration: 5000, // 5 seconds countdown
        useNativeDriver: false,
      }).start(() => {
        setChecked(true); // Auto-check the checkbox when countdown ends
      });
    }
  }, [expanded]);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  const widthInterpolation = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.accordionContainer}>
      {/* Header */}
      <TouchableOpacity onPress={toggleAccordion} style={styles.header}>
       <View style={{flexDirection:'row',gap:5}}>
       {checked && <Ionicons name="checkmark-circle" size={24} color="#0D9488" />}
       <Text style={styles.headerText}>{title}</Text>
       </View>
        <View style={styles.headerRight}>
          <Ionicons
            name={expanded ? "chevron-up" : "chevron-down"}
            size={24}
            color="black"
            style={{ marginLeft: 10 }}
          />
        </View>
      </TouchableOpacity>

      {/* Content */}
      {expanded && (
        <View style={styles.content}>
          <Image source={imageSource} style={styles.image} />
          <Text style={styles.contentText}>{content}</Text>

          {/* Loading Bar */}
          {!checked && (
            <View style={styles.progressBarContainer}>
              <Animated.View style={[styles.progressBar, { width: widthInterpolation }]} />
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const TrainingSession = () => {
  return (
    <>
      <Header name="History" arrow="arrow-back" />
      <View style={styles.container}>
        <AccordionItem
          title="Warm-up (3-5 mins) "
          imageSource={require("../../assets/images/Rectangle 180.png")}
          content="This is the first item's content."
        />
        <AccordionItem
          title="Second Item"
          imageSource={require("../../assets/images/Rectangle 180.png")}
          content="This is the second item's content."
        />
        <AccordionItem
          title="Third Item"
          imageSource={require("../../assets/images/Rectangle 180.png")}
          content="This is the third item's content."
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  accordionContainer: {
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f8f9fa",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: 80,
    borderRadius: 8,
    marginBottom: 5,
  },
  contentText: {
    fontSize: 14,
    color: "#333",
  },
  progressBarContainer: {
    width: "100%",
    height: 7,
    backgroundColor: "#F1F5F9",
    borderRadius: 5,
    overflow: "hidden",
    marginTop: 5,
  },
  progressBar: {
    height: "100%",
    // paddingVertical:12,
    backgroundColor: "#0D9488",
  },
});

export default TrainingSession;
