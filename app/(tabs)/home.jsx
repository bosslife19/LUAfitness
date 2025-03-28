import { 
  Image, 
  StyleSheet, 
  ScrollView, 
  View, 
  StatusBar, 
  Text, 
  TouchableOpacity, 
  ImageBackground 
} from 'react-native';
import { ThemedText } from '../../components/ThemedText';
import logo from "../../assets/images/logo.png";
import Notification from '../../assets/images/notification'; // Ensure this is a valid React Component or SVG
import bg from "../../assets/images/bg.png";
import clock from "../../assets/images/clock.png";
import flash from "../../assets/images/flash.png";
import front from "../../assets/images/front.png";
import AntDesign from '@expo/vector-icons/AntDesign';
import WeeklyTimeline from '../../screens/Homescreens/WeeklyTimeline';
import ProgressOverview from '../../screens/Homescreens/ProgressOverview';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

        {/* Top Section: Title */}
        <View style={styles.titleContainer}>
          <View style={styles.Container}>
            {/* Logo */}
            <Image source={logo} style={styles.logo} resizeMode="cover" />

            {/* Greeting Text */}
            <View>
              <Text style={styles.greetingText}>Good Morning</Text>
              <Text style={styles.usernameText}>Olivia Presh 🌞</Text>
            </View>
          </View>


          {/* Notification Icon */}
          <TouchableOpacity onPress={()=> router.push("/(routes)/notification")} style={styles.notificationContainer}>
            <Notification />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>


        {/* Motivational Message */}
        <View style={styles.motivationContainer}>
          <Text style={styles.motivationText}>
            You’re doing great! Keep up the pace 🏆
          </Text>
        </View>

        {/* Image Background Section */}
           <ImageBackground source={bg} style={styles.imageBackground}>
            <Text style={[styles.imageText,{paddingTop:12}]}>Core strength</Text>
           <View style={styles.flexD}>
           <View style={[styles.flexD,{position:"relative"}]}>
              <View style={styles.flexD}>
                <Image source={clock} style={{width:16,height:16}} />
                <Text style={[styles.imageText,{color:"#E2E8F0",fontSize:14,fontWeight:500}]}>15 Minutes</Text>
              </View>
              <View style={styles.flexD}>
               <Image source={flash} style={{width:16,height:16}} />
               <Text style={[styles.imageText,{color:"#E2E8F0",fontSize:14,fontWeight:500}]}>Skipping rope</Text>
              </View>
            </View>
            {/* <View style={{}}> */}
            <Image source={front} style={{width:"30%",height:105,position:"absolute",right:0, top:"-50%"}} resizeMode='cover' />
            {/* </View> */}
           </View>
            <TouchableOpacity style={styles.btns} >
               <Text style={styles.button}>Get Started</Text>
               <AntDesign name="arrowright" size={14} color="#8A2BE2" />
            </TouchableOpacity>
          </ImageBackground>

          {/* Weekly Timeline */}
          <WeeklyTimeline/>

        {/* Placeholder for Additional Content */}
        <View style={styles.contentContainer}>
         <View style={[styles.scrollContainer,{justifyContent:"space-between"}]}>
                    <Text style={styles.Header}>Progress Overview</Text>
                     <TouchableOpacity onPress={()=> router.push("/(routes)/progressOverview")}>
                      <Text style={[
                         styles.optionText,{color:"#8A2BE2"}
                        ]}>
                      See all
                      </Text>
                   
                     </TouchableOpacity>
         </View>
          {/* Progress Overview */}
          <ProgressOverview/>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    padding: 16,
    backgroundColor:"#F8FAFC"
  },
  Header:{
    color:"#0F172A",
    fontFamily:"montserratMeduim",
    fontSize:16,
    fontWeight:700
},
  optionText: {
    color: "#0F172A",
    fontSize: 15,
    fontFamily: "montserratMeduim",
    fontWeight: "bold",
        // textAlign: "center",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal:20,
    paddingTop:20,
    backgroundColor:"#F8FAFC"
  },
  flexD:{
    marginTop:5,
    flexDirection: "row",
    gap:5,
    // justifyContent: "space-between",
    alignItems: "center",
  },
  Container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  scrollContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  logo: {
    borderRadius: 40,
    height: 40,
    width: 40,
  },
  greetingText: {
    color: "#64748B",
    fontFamily: "montserratMedium",
    fontSize: 12,
    fontWeight: "500",
  },
  usernameText: {
    color: "#0F172A",
    fontFamily: "montserratMedium",
    fontSize: 16,
    fontWeight: "700",
  },
  notificationContainer: {
    position: "relative",
  },
  notificationDot: {
    width: 5,
    height: 5,
    backgroundColor: "#FF0E0E",
    position: "absolute",
    borderRadius: 40,
    right: "20%",
  },
  motivationContainer: {
    backgroundColor: "#F2E6FE",
    paddingVertical: 14,
    paddingHorizontal: 10,
    marginBottom:14,
    borderTopStartRadius:10,
    borderTopEndRadius:10,

  },
  motivationText: {
    color: "#8A2BE2",
    fontFamily: "montserratMedium",
    fontSize: 12,
    fontWeight: "500",
  },
  
  imageBackground: {
    height: 125,
    borderRadius: 20,
    overflow: "hidden",
     // justifyContent: "flex-end",
    // paddingTop: 4,
    paddingHorizontal: 13,
  },
  imageText: {
    color: "#fff",
    fontFamily: "montserratMedium",
    fontSize: 17,
    fontWeight: "700",
    lineHeight:18
  },
  contentContainer: {
    // padding: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
  },
  btns: {
    marginTop:"5%",
    flexDirection:"row",
    alignItems:"center",
    width: "35%",
    gap:5,
    paddingVertical: 7,
    paddingHorizontal:10,
    borderWidth: 1,
    borderRadius: 14.29,
    backgroundColor:"#fff",
    borderColor: "#fff",
  },
  button: {
    fontSize: 13,
    fontFamily:"montserratMeduim",
    fontWeight: "700",
    // textAlign: "center",
    color: "#8A2BE2",
  },
});
