import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello! Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
