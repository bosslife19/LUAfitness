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
      paddingTop: "10%",
      gap:5,
      
    },
    tabButton: {
      marginHorizontal: 5,
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
    },
    activeTab: {
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
    allTabButton: {
    },
   
   
    centerBorder: {
      width: 1.4,
      height: 15,  
      backgroundColor: '#A4A4A4',
      alignSelf: 'center',
    },
    allTabText: {
  
    },
    activeTabText: {
      // width:"100%",
      paddingHorizontal:30,
      paddingVertical:5,
      borderRadius:30,
      fontSize: 12.4,
      backgroundColor:"#0F172A",
      fontWeight: "700",
      lineHeight:22.4,
      color: "#fff",
      fontFamily:"montserratMeduim",
    },
    dkliveBg:{
      backgroundColor:"#fff",
      paddingHorizontal:"3%",
      paddingVertical:"2%",
      borderRadius:8,
      borderWidth:1,
      borderColor:"#E9E9E9",
      gap:5,
      marginTop:10,
    },
    dkliveBgs:{
      backgroundColor:"#fff",
      paddingHorizontal:"3%",
      paddingVertical:"2%",
      borderRadius:8,
      borderWidth:1,
      borderColor:"#E9E9E9",
      gap:5,
      // marginTop:10,
    },
    dkliveB:{
      backgroundColor:"#fff",
      paddingHorizontal:"3%",
      // paddingVertical:"2%",
      borderRadius:8,
      borderWidth:1,
      borderColor:"#E9E9E9",
      // gap:5,
      // marginTop:10,
    },
    dklivesection:{
      flexDirection:"row",
      alignItems:"center",
      gap:13
    }
  })


  export default HeaderCheckoutStyl;