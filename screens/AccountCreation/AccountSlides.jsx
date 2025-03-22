import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { ProgressBar } from "react-native-paper";
import LegalName from "./allAcounts/LegalName";
import OTPMainEmail from "./allAcounts/OTP";
import SecurityDetails from "./allAcounts/SecurityDetails";
import PersonalizationDetails from "./allAcounts/PersonalizationDetails";
import OptionDetails2 from "./allAcounts/optionDetails/OptionDetails2";
import OptionDetails1 from "./allAcounts/optionDetails/OptionDetails1";
import PreferedName from "./allAcounts/PreferedName";
import Pronouns from "./allAcounts/Pronuons";
import ShareIntentions from "./allAcounts/ShareIntentions";
import SupportStyle from "./allAcounts/SupportStyle";
import Period from "./allAcounts/Period";
// import BirthCOntrol from "./allAcounts/BirthControl";
import Cycles from "./allAcounts/Cycle";
// import BirthCOntrol from "./allAcounts/BirthControl";
import BirthControl from "./allAcounts/BirthControl";
import FlowSlider from "./allAcounts/Flow";
import Symptoms from "./allAcounts/Symptons";
import FitNess from "./allAcounts/FitnessLevel";
import ExerciseExperience from "./allAcounts/ExerciseExperience";
import ExerciseFrequency from "./allAcounts/ExerciseFrequency";
import DailyActivity from "./allAcounts/DailyActivity";
import AdditionalInfo from "./allAcounts/AdditionalInfo";
import Movement from "./allAcounts/Movement";
import Medical from "./allAcounts/Medical";
import Support from "./allAcounts/Support";
import MovementConsider from "./allAcounts/MovementConsider";
import RecentProce from "./allAcounts/RecentProce";
import Preg from "./allAcounts/Preg";
import MovemResp from "./allAcounts/MovemResp";
import HealthProv from "./allAcounts/HealthProv";
// import AdditionlInfo from "./allAcounts/AdditionlInfos";
import PhysicalActivity from "./allAcounts/PhysicalActivity";
import AdditionlInfos from "./allAcounts/AdditionlInfos";
import Acknownleg from "./allAcounts/Acknownleg";
import Aggrement from "./allAcounts/Aggrement";
import CreateAccount from "./allAcounts/CreateAccount";
import SubDetails from "./allAcounts/SubDetails";
import PaymentInfo from "./allAcounts/PaymentInfo";
import OrderSummary from "./allAcounts/OrderSummary";
// import OrderSummary from "./OrderSummary";
// import MovementConsider from "./allAcounts/MovementConsider";

const verificationSteps = ["verify", "SecurityDetails", "PersonalizationDetails","optionDetails1","optionDetails2"];
const menuItems = ["LegalName", "Preferences", "Pronouns", "Intentions","SupportStyle","period","birthControl","cycle", "flow","symptoms","FitNess","exeExp","exeFreq","DailyActivity", "AddInfo","Movement","medical","support","MovementConsider", "RecentProce","Preg", "MovementResp", "HealthProv", "AdditionlInfo","PhysicalActivity", "Acknownleg","Aggrement","CreateYOurAccount","SubDetails","PaymentInfo","OrderSummary"]; 

 

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
      <ScrollView
      showsVerticalScrollIndicator={false} 

      style={styles.container}>
        <ProgressBar
          progress={(stepIndex + 1) / (verificationSteps.length + menuItems.length)}
          color="#8A2BE2"
          style={{ height: 4, borderRadius: 20 }}
        />
        <Text style={styles.progressText}>Step {stepIndex + 1} of {verificationSteps.length + menuItems.length}</Text>
        
        <View
       style={styles.content}>
          {isVerificationStep ? (
            stepIndex === 0 ? <OTPMainEmail onNext={handleNext} /> :
            stepIndex === 1 ? <SecurityDetails onNext={handleNext} /> :
            stepIndex === 2 ? <PersonalizationDetails onNext={handleNext} /> :
            stepIndex === 3 ? <OptionDetails2 onNext={handleNext}/> :
            <OptionDetails1 onNext={handleNext}/>
            
          ) : (
            stepIndex - verificationSteps.length === 0 ? <LegalName /> :
            stepIndex - verificationSteps.length === 1 ? <PreferedName /> :
            stepIndex - verificationSteps.length === 2 ? <Pronouns /> :
            stepIndex - verificationSteps.length === 3 ? <ShareIntentions /> :
            stepIndex - verificationSteps.length === 4 ? <SupportStyle /> :
            stepIndex - verificationSteps.length === 5 ? <Period /> :
            stepIndex - verificationSteps.length === 6 ? <BirthControl /> :
            stepIndex - verificationSteps.length === 7 ? <Cycles /> :
            stepIndex - verificationSteps.length === 8 ? <FlowSlider /> :
            stepIndex - verificationSteps.length === 9 ? <Symptoms /> :
            stepIndex - verificationSteps.length === 10 ? <FitNess /> :
            stepIndex - verificationSteps.length === 11 ? <ExerciseExperience /> :
            stepIndex - verificationSteps.length === 12 ? <ExerciseFrequency /> :
            stepIndex - verificationSteps.length === 13 ? <DailyActivity /> :
            stepIndex - verificationSteps.length === 14 ? <AdditionalInfo /> :
            stepIndex - verificationSteps.length === 15 ? <Movement /> :
            stepIndex - verificationSteps.length === 16 ? <Medical /> :
            stepIndex - verificationSteps.length === 17 ? <Support /> :
            stepIndex - verificationSteps.length === 18 ? <MovementConsider /> :
            stepIndex - verificationSteps.length === 19 ? <RecentProce /> :
            stepIndex - verificationSteps.length === 20 ? <Preg /> :
            stepIndex - verificationSteps.length === 21 ? <MovemResp /> :
            stepIndex - verificationSteps.length === 22 ? <HealthProv /> :
            stepIndex - verificationSteps.length === 23 ? <AdditionlInfos /> :
            stepIndex - verificationSteps.length === 24 ? <PhysicalActivity /> :
            stepIndex - verificationSteps.length === 25 ? <Acknownleg /> :
            stepIndex - verificationSteps.length === 26 ? <Aggrement /> :
            stepIndex - verificationSteps.length === 27 ? <CreateAccount /> :
            stepIndex - verificationSteps.length === 28? <SubDetails /> :
            stepIndex - verificationSteps.length === 29 ? <PaymentInfo /> :
            stepIndex - verificationSteps.length === 30 ? <OrderSummary  onNext={handleNext}/> 
            : ""
  
          )}
        </View>
        
        {!isVerificationStep && stepIndex - verificationSteps.length !== 30 && (
        <View style={styles.buttonContainer}>
          
          {!(stepIndex - verificationSteps.length === 0) && (
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
      </ScrollView>
    );
  };
  
const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
    // height:"100%",
    // flex: 1,
     marginVertical:20,
  },
  buttonContainer: {
    // marginTop:"20%",
    gap: 10,
    // paddingBottom: 20,
    flexDirection: "column-reverse",
    alignItems: "center",
     marginBottom:"20%"
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
