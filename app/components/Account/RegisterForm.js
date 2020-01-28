import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { validateEmail } from "../../utils/Validation";

export default function RegisterForm() {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideRepeatPassword, setHideRepeatPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [repPass, setRepPass] = useState("");

  const register = () => {
    // console.log("Usuario Registrado");
    // console.log("email:" + email);
    // console.log("pass:" + pass);
    // console.log("repPass:" + repPass);
    // const resultValidationEmail = validateEmail(email);
    // console.log("Resultado validacion:" + resultValidationEmail);

    if (!email || !pass || !repPass) {
      console.log("Todos los campos son obligatorios");
    } else {
      if (!validateEmail(email)) console.log("Debe ingresar un email correcto");
      else if (pass !== repPass) console.log("Las contrasenas no son iguales");
      else console.log("Correcto");
    }
  };

  return (
    <View style={styles.formContainer} behavior="padding" enabled>
      <Input
        placeholder="Correo Electronico"
        containerStyle={styles.inputForm}
        onChange={e => setEmail(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          />
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
          />
        }
      ></Input>
      <Input
        placeholder="Repetir Contraseña"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={hideRepeatPassword}
        onChange={e => setRepPass(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name={hideRepeatPassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setHideRepeatPassword(!hideRepeatPassword)}
          />
        }
      ></Input>
      <Button
        title="Unirse"
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}
        onPress={register}
      />
    </View>
  );
}

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
  btnContainerRegister: {
    marginTop: 20,
    width: "95%"
  },
  btnRegister: {
    backgroundColor: "#00a680"
  }
});
