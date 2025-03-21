import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { ProgressBar } from "react-native-paper";
import LegalName from "./allAcounts/LegalName";
import OTPMainEmail from "./allAcounts/OTP";
import SecurityDetails from "./allAcounts/SecurityDetails";
import PersonalizationDetails from "./allAcounts/PersonalizationDetails";
import OptionDetails2 from "./allAcounts/optionDetails/OptionDetails2";
import OptionDetails1 from "./allAcounts/optionDetails/OptionDetails1";

const verificationSteps = ["verify", "SecurityDetails", "PersonalizationDetails","optionDetails1","optionDetails2"];
const menuItems = ["LegalName", "Preferences", "Settings", "Payment"];

const Preferences = () => (
  <View>
    <Text style={styles.title}>Preferences</Text>
    <Text>Choose Range:</Text>
    <TextInput placeholder="Select Range" style={styles.input} />
  </View>
);

const Settings = () => (
  <View>
    <Text style={styles.title}>Settings</Text>
    <TextInput placeholder="Set Username" style={styles.input} />
  </View>
);

const Payment = () => (
  <View>
    <Text style={styles.title}>Payment</Text>
    <TextInput placeholder="Card Number" style={styles.input} />
  </View>
);

const Account = () => {
    const [stepIndex, setStepIndex] = useState(0);
    const isVerificationStep = stepIndex < verificationSteps.length;
  
    const handleNext = () => {
      if (stepIndex < verificationSteps.length + menuItems.length - 1) {
        setStepIndex(stepIndex + 1);
      }
    };
  
    const handlePrev = () => {
      if (stepIndex > 0) {
        setStepIndex(stepIndex - 1);
      }
    };
  
    return (
      <View style={styles.container}>
        <ProgressBar
          progress={(stepIndex + 1) / (verificationSteps.length + menuItems.length)}
          color="#8A2BE2"
          style={{ height: 4, borderRadius: 20 }}
        />
        <Text style={styles.progressText}>Step {stepIndex + 1} of {verificationSteps.length + menuItems.length}</Text>
        
        <View style={styles.content}>
          {isVerificationStep ? (
            stepIndex === 0 ? <OTPMainEmail onNext={handleNext} /> :
            stepIndex === 1 ? <SecurityDetails onNext={handleNext} /> :
            stepIndex === 2 ? <PersonalizationDetails onNext={handleNext} /> :
            stepIndex === 3 ? <OptionDetails2 onNext={handleNext}/> :
            <OptionDetails1 onNext={handleNext}/>
            
          ) : (
            stepIndex - verificationSteps.length === 0 ? <LegalName /> :
            stepIndex - verificationSteps.length === 1 ? <Preferences /> :
            stepIndex - verificationSteps.length === 2 ? <Settings /> :
            <Payment />
          )}
        </View>
        
        {!isVerificationStep && (
        <View style={styles.buttonContainer}>
          
          {"LegalName" > 0 && (
            <TouchableOpacity style={styles.btns} onPress={handlePrev}>
              <Text style={styles.button}>Previous</Text>
            </TouchableOpacity>
          )}
         
            <TouchableOpacity
              style={[styles.btns, { backgroundColor: "#8A2BE2" }]}
              onPress={handleNext}
              disabled={stepIndex === verificationSteps.length + menuItems.length - 1}
            >
              <Text style={[styles.button, { color: "#fff" }]}>Proceed</Text>
            </TouchableOpacity>
         
        </View>
         )}
      </View>
    );
  };
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "10%",
    paddingHorizontal: 16,
    backgroundColor: "#F8EFFE",
  },
  progressText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#64748B",
    marginBottom: 10,
    paddingTop: 10,
  },
  content: {
    flex: 0.6,
    marginVertical: 20,
  },
  buttonContainer: {
    gap: 10,
    paddingBottom: 20,
    flexDirection: "column-reverse",
    alignItems: "center",
  },
  btns: {
    width: "100%",
    paddingVertical: 17,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#8A2BE2",
  },
  button: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    color: "#8A2BE2",
  },
});

export default Account;
