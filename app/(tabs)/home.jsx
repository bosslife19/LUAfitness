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

export default function HomeScreen() {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
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
          <TouchableOpacity style={styles.notificationContainer}>
            <Notification />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>

        {/* Motivational Message */}
        <View style={styles.motivationContainer}>
          <Text style={styles.motivationText}>
            You’re doing great! Keep up the pace 🏆
          </Text>
        </View>

        {/* Image Background Section */}
        <View style={styles.imageWrapper}>
          <ImageBackground source={bg} style={styles.imageBackground}>
            <Text style={styles.imageText}>Core strength</Text>
          </ImageBackground>
        </View>

        {/* Placeholder for Additional Content */}
        <View style={styles.contentContainer}>
          <ThemedText>Start adding your components here...</ThemedText>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    padding: 16,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  Container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
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
  },
  motivationText: {
    color: "#8A2BE2",
    fontFamily: "montserratMedium",
    fontSize: 12,
    fontWeight: "500",
  },
  imageWrapper: {
    marginTop: 20,
    borderRadius: 20,
    overflow: "hidden",
  },
  imageBackground: {
    height: 200,
     // justifyContent: "flex-end",
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
  imageText: {
    color: "#fff",
    fontFamily: "montserratMedium",
    fontSize: 12,
    fontWeight: "500",
  },
  contentContainer: {
    padding: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
  },
});
