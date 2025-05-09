import { AntDesign, Entypo } from "@expo/vector-icons";
import { TabBar } from "@/components/TabBar";
import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const TabLayout = () => {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "news",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="news" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="video"
        options={{
          title: "Shorts",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="video" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="controller"
        options={{
          title: "Quizzes",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="controller-play" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
