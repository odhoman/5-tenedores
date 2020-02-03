import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { validateEmail } from "../../utils/Validation";
import Loading from "../Loading";
import { withNavigation } from "react-navigation";
import * as firebase from "firebase";

function LoginForm(props) {
  const { toastRef, navigation } = props;
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isVisibleLoading, setVisibleLoading] = useState(false);

  const login = async () => {
    setVisibleLoading(true);
    if (!email || !pass) {
      toastRef.current.show("Todos los campos son obligatorios");
    } else {
      if (!validateEmail(email)) {
        toastRef.current.show("Debe ingresar un email correcto");
        //TODO: crear validacion de password: minimos maximos y caracteres permitidos
      } else {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email, pass)
          .then(() => {
            navigation.navigate("Restaurants");
          })
          .catch(e => {
            //TODO: ver tema de cachear los errores http, errores de validacion (lenguaje)
            toastRef.current.show("Error en la autenticacion: " + e);
          });
      }
    }
    setVisibleLoading(false);
  };
  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo Electronico"
        containerStyle={styles.inputForm}
        onChange={e => setEmail(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          ></Icon>
        }
      ></Input>
      <Input
        placeholder="Contraseña"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={hidePassword}
        onChange={e => setPass(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setHidePassword(!hidePassword)}
          ></Icon>
        }
      ></Input>
      <Button
        title="Iniciar Sesion"
        containerStyle={styles.btnContaierLogin}
        buttonStyle={styles.btnLogin}
        onPress={login}
      ></Button>
      <Loading text="Creando Cuenta..." isVisible={isVisibleLoading} />
    </View>
  );
}

export default withNavigation(LoginForm);

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  inputForm: {
    width: "100%",
    marginTop: 20
  },
  iconRight: {
    color: "#c1c1c1"
  },
  btnContaierLogin: {
    width: "95%",
    marginTop: 20
  },
  btnLogin: {
    backgroundColor: "#00a680"
  }
});
