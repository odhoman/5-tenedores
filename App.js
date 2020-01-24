import React from "react";
import Navigation from "./app/navigations/Navigation";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>5 Tenedores...e e e z z z</Text>
    // </View>
    <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
