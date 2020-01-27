import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Overlay } from "react-native-elements";

export default function Loading(props) {
  const { isVisible, text } = props;
  return (
    <Overlay
      isVisible={isVisible}
      windowBackgroundColor="rga(0, 0, 0, .6)"
      overlayBackgroundColor="trasparent"
      overlayStyle={styles.Overlay}
    >
      <View style={styles.View}>
        <ActivityIndicator size="large" color="00a680"></ActivityIndicator>
        {text && <Text style={styles.Text}>{text}</Text>}
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  Overlay: {
    height: 100,
    width: 200,
    borderColor: "#00a680",
    backgroundColor: "#fff",
    borderWidth: 2,
    borderRadius: 10
  },
  View: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  Text: {
    color: "#00a680",
    textTransform: "uppercase",
    marginTop: 10
  }
});
