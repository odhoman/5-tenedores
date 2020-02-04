import React, { useRef } from "react";
import { SocialIcon } from "react-native-elements";

export default function LoginFacebook() {
  const login = () => {
    console.log("logueando con facebook1");
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
