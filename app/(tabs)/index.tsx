import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Home() {
  const handleDrawerToggle = () => {
    // TODO: Hook this to drawer navigation
    console.log("Toggle drawer");
  };

  const handleNotifications = () => {
    console.log("Notifications tapped");
  };

  return (
    <View style={styles.page}>
      {/* Header / Top Bar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleDrawerToggle}>
          <Feather name="menu" size={24} color="#000" />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Feather name="book-open" size={24} color="#0d6efd" />
          <Text style={styles.logoText}>DailyTapp</Text>
        </View>

        <TouchableOpacity onPress={handleNotifications}>
          <Feather name="bell" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Cards */}
      <ScrollView
        pagingEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Add more FlipCards as needed */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    elevation: 2,
    borderBottomWidth: 0.3,
    borderBottomColor: "#ccc",
  },
  headerCenter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  logoText: {
    fontSize: 18,
    color: "#0d6efd",
    fontFamily: "ComfortaaBold",
    marginLeft: 6,
  },
});
