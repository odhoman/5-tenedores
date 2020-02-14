import React, { useState } from "react";
import { SocialIcon } from "react-native-elements";
import * as Facebook from "expo-facebook";
import * as firebase from "firebase";
import { FacebookApi } from "../../utils/Social";
import Loading from "../Loading";

export default function LoginFacebook() {
  const login = async () => {
    await Facebook.initializeAsync(FacebookApi.application_id);
    const {
      type,
      token
    } = await Facebook.logInWithReadPermissionsAsync(
      FacebookApi.application_id,
      { permissions: FacebookApi.permissions }
    );
    if (type === "success") {
      const credentials = firebase.auth.FacebookAuthProvider.credential(token);
      await firebase
        .auth()
        .signInWithCredential(credentials)
        .then(() => {
          console.log("Login Correcto...");
        })
        .catch(e => {
          console.log("Errorrrrrr: " + e);
        });
    } else if (type === "cancel") {
      console.log("Inicio de sesion cancelado");
    } else {
      console.log("Error por type: " + type);
    }
  };

  return (
    <SocialIcon
      title="Inciar Sesion con Facebook"
      button
      type="facebook"
      onPress={login}
    />
  );
}
