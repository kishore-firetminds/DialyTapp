import React from "react";
import { StyleSheet, Text, View } from "react-native";

const controller = () => {
  return (
    <View style={styles.container}>
      <Text>controller-play Screen</Text>
    </View>
  );
};

export default controller;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
