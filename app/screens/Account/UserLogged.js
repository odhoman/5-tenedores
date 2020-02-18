import React, { useState, useEffect, useRef } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import * as firebase from "firebase";
import InfoUser from "../../screens/Account/InfoUser";
import Toast from "react-native-easy-toast";
import Loading from "../../components/Loading";

export default function UserLogged() {
  const [userInfo, setUserInfo] = useState({});
  const [reloadData, setReloadData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [textLoading, setTextLoading] = useState("");
  const toastRef = useRef();

  useEffect(() => {
    (async () => {
      const user = await firebase.auth().currentUser;
      setUserInfo(user.providerData[0]);
      console.log(userInfo);
    })();
    setReloadData(false);
  }, [reloadData]);

  // Se le pasa por parametro el setReloadData para que se ejecute dentro de un componente
  return (
    <View>
      <InfoUser
        userInfo={userInfo}
        setReloadData={setReloadData}
        toastRef={toastRef}
        setIsLoading={setIsLoading}
        setTextLoading={setTextLoading}
      />
      <Button
        title="Cerrar Sesion"
        onPress={() => {
          firebase.auth().signOut();
        }}
      />
      <Toast ref={toastRef} position="center" opacity={0.5} />
      <Loading text={textLoading} isVisible={isLoading} />
    </View>
  );
}
