import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
 import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";

const chatList = [
  {
    id: "1",
    name: "John Doe",
    lastMessage: "Hey! How are you?",
    lastSeen: "2 min ago",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    isOnline: true,
  },
  {
    id: "2",
    name: "Jane Smith",
    lastMessage: "See you tomorrow!",
    lastSeen: "5 min ago",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    isOnline: false,
  },
];

const ChatListScreen = () => {
 
  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Messages</Text>
        <TouchableOpacity onPress={()=> router.push("/(routes)/chat/search",)}>
          <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <FlatList
          data={chatList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.chatItem}
            //   onPress={() => router.push("/(routes)/chat/chatRoom", { user: item })}
              onPress={() => router.push({ pathname: "/(routes)/chat/chatRoom", 
                params: { user: JSON.stringify(item) }, // Convert object to string
            })}

            >
              <Image source={{ uri: item.image }} style={styles.profileImage} />
              <View style={styles.chatDetails}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.message}>{item.lastMessage}</Text>
              </View>
              <View>
                <Text style={styles.lastSeen}>{item.lastSeen}</Text>
                <View style={styles.unreadBadge}>
                  <Text style={styles.unreadText}>2</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10 },
  chatItem: { flexDirection: "row", padding: 10, alignItems: "center", borderBottomWidth: 1, borderColor: "#E2E8F0" },
  profileImage: { width: 50, height: 50, borderRadius: 25 },
  chatDetails: { flex: 1, marginLeft: 10 },
  name: { fontSize: 14, fontWeight: "bold" },
  message: { color: "#94A3B8" },
  lastSeen: { color: "#94A3B8", fontSize: 12 },
  unreadBadge: { backgroundColor: "#8A2BE2", borderRadius: 15, width: 22, height: 22, justifyContent: "center", alignItems: "center", alignSelf: "flex-end", marginTop: 5 },
  unreadText: { color: "#fff", fontSize: 12 },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: "13%",
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 3,
    borderColor: "#F8FAFC",
  },
  headerText: { flex: 1, fontSize: 18, fontWeight: "700", textAlign: "center", color: "#000" },
});

export default ChatListScreen;
