import { Image, StyleSheet, ScrollView, View, StatusBar } from 'react-native';
import { ThemedText } from '../../components/ThemedText';

export default function HomeScreen() {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {/* Top Section: Title */}
        <View style={styles.titleContainer}>
          <ThemedText type="title">Welcome to Home Screen</ThemedText>
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
    alignItems: 'center',
    marginVertical: 20,
  },
  contentContainer: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
});
