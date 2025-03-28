import { StyleSheet } from "react-native";

const HeaderCheckoutStyl = StyleSheet.create({
    container: {
      paddingBottom: 10,
       
       height:"100%"
    },
    containers: {
       height:"100%"
    },
   
    tabContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingTop: "5%",
      gap:5,
      
    },
    tabButton: {
      borderWidth:1,
      borderColor:"#F1F5F9",
      backgroundColor:"#F1F5F9",
      paddingHorizontal:24,
      paddingVertical:5,
      borderRadius:30,
      // marginHorizontal: 5,
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
    },
    activeTab: {
     backgroundColor:"#0F172A",
    },
    closeButtonText: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#333",
      textAlign: "center",
    },
    tabButtonText: {
      fontSize: 12.3,
      // paddingHorizontal:30,
      // paddingVertical:5,
      fontWeight: "500",
      color: "#64748B",
      textAlign: "center",
       fontFamily:"montserratMeduim",

      lineHeight: 22.4,
    }, 
   
    activeTabText: {
      // width:"100%",
      backgroundColor:"#0F172A",
      borderRadius:30,
      fontSize: 12.4,
     
      fontWeight: "700",
      lineHeight:22.4,
      color: "#fff",
      fontFamily:"montserratMeduim",
    },
    
   
  })


  export default HeaderCheckoutStyl;