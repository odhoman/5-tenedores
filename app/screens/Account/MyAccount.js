import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import { View, Text } from "react-native";

export default function MyAccount() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      console.log("HOLA " + user);
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  console.log("login " + login);

  if (login === null) {
    return (
      <View>
        <Text>Usuario NO logueado del if...</Text>
      </View>
    );
  }

  if (login) {
    return (
      <View>
        <Text>Usuario logueado... del if</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Usuario no logueado...</Text>
    </View>
  );
}
