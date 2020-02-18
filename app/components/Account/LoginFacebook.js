import React, { useState } from "react";
import { SocialIcon } from "react-native-elements";
import * as Facebook from "expo-facebook";
import * as firebase from "firebase";
import { FacebookApi } from "../../utils/Social";
import Loading from "../Loading";

export default function LoginFacebook(props) {
  const { toastRef, navigation } = props;
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true);
      const credentials = firebase.auth.FacebookAuthProvider.credential(token);
      await firebase
        .auth()
        .signInWithCredential(credentials)
        .then(() => {
          toastRef.current.show("Login correcto...");
          console.log("Login Correcto...");
          navigation.navigate("Restaurants");
        })
        .catch(e => {
          toastRef.current.show("Errorrrrrr: " + e);
          console.log("Errorrrrrr: " + e);
        });
    } else if (type === "cancel") {
      console.log("Inicio de sesion cancelado");
      toastRef.current.show("Inicio de sesion cancelado");
    } else {
      //TODO: Ver porque no te deja entrar con el mail que tenias en facebook que al mismo tiempo era uno registrado en la BD de firebird
      toastRef.current.show("Error por type: " + type);
      console.log("Error por type: " + type);
    }
    setIsLoading(false);
  };

  return (
    <>
      <SocialIcon
        title="Inciar Sesion con Facebook"
        button
        type="facebook"
        onPress={login}
      />
      <Loading isVisible={isLoading} text="Iniciando Sesion" />
    </>
  );
}
