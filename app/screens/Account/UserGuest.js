import React from "react";
import { StyleSheet, ScrollView, View, Text, Image } from "react-native";
import { Button } from "react-native-elements";

export default function UserGuest() {
  return (
    <ScrollView style={style.viewBody} centerContent={true}>
      <Image
        source={require("../../../assets/img/user-guest.jpg")}
        style={style.image}
        resizeMode="contain"
      />
      <Text style={style.title}>Consulta tu perfil de 5 tenedores</Text>

      <Text style={style.description}>
        Como describirias tu mejor restaurant. Busca y visualiza los mejores
        restaurantes de una manera sencilla, vota cual te ha gustado y mas.
        Comenta como ha sido tu experiencia.
      </Text>

      <View style={style.viewBtn}>
        <Button
          buttonStyle={style.btnStyle}
          containerStyle={style.btnContainer}
          title="Ver tu perfil"
          onPress={() => console.log("Hello World")}
        />
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center"
  },
  description: {
    textAlign: "center",
    marginBottom: 20
  },
  viewBtn: {
    flex: 1,
    alignItems: "center"
  },
  btnStyle: {
    backgroundColor: "#00a680"
  },
  btnContainer: {
    width: "70%"
  }
});
