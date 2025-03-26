import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
  import { useNavigation } from "expo-router";
//  import HeaderCheckoutStyl from "@/styles/HeaderCheckout/Headercheckout";
import ExerciseMainPage from "./ExecriseMainPage";
import HeaderCheckoutStyl from "../../styles/HeaderStyles/Headercheckout";
import Header from "../header/ExecriseMainHeader";

// TabHeader Component
const TabHeader = ({ activeTab, setActiveTab }) => {
  const tabs = ["All", "Movements","Muscles"];
   const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{     backgroundColor:"#F8FAFC" , paddingHorizontal: "3.4%", paddingTop: 10, paddingBottom: 10 }}>
     <Header name="Exercise Library" arrow="arrow-back" />
      <View style={HeaderCheckoutStyl.tabContainer}>
        {tabs.map((tab, index) => (
          <React.Fragment key={tab}>
            <TouchableOpacity
              style={[
                HeaderCheckoutStyl.tabButton,
                activeTab === tab && HeaderCheckoutStyl.activeTab,
                tab === "All" && HeaderCheckoutStyl.allTabButton,
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  HeaderCheckoutStyl.tabButtonText,
                  activeTab === tab && HeaderCheckoutStyl.activeTabText,
                  tab === "All" && HeaderCheckoutStyl.allTabText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
            {index < tabs.length - 1 && <View style={HeaderCheckoutStyl.centerBorder} />}
          </React.Fragment>
        ))}
         
      </View>

     
    </View>
  );
};

 
 

const TabPanel = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <View style={HeaderCheckoutStyl.container}>
      {/* Header Section */}
      <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Content Section */}
      {activeTab === "All" && <ExerciseMainPage />}
      {activeTab === "Movements" && <ExerciseMainPage />}
      {activeTab === "Muscles" && <ExerciseMainPage />}

     </View>
  );
};

export default TabPanel;
