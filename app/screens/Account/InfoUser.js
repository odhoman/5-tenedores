import React, { useRef } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Avatar } from "react-native-elements";
import * as firebase from "firebase";
import * as Permissions from "expo-permissions";
import * as ImgagePicker from "expo-image-picker";

export default function InfoUser(props) {
  const {
    userInfo: { uid, displayName, email, photoURL }
  } = props;
  const changeAvatar = async () => {
    const resultPermission = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );
    const resultPermissionCamera =
      resultPermission.permissions.cameraRoll.status;
    if (resultPermissionCamera === "denied") {
      console.log("dar permisos a la camara");
    } else if (resultPermissionCamera === "granted") {
      //TODO restringir tamanio para que no sea gigante
      const result = await ImgagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3]
      });

      if (result.cancelled) {
        cosole.log("has cerrado la galeria de imagenes");
      } else {
        uploadImage(result.uri, uid).then(() => {
          updatePhotoUrl(uid);
        });
      }
    }
  };

  const updatePhotoUrl = uid => {
    firebase
      .storage()
      .ref(`avatar/${uid}`)
      .getDownloadURL()
      .then(async result => {
        const update = {
          photoURL: result
        };
        await firebase.auth().currentUser.updateProfile(update);
      })
      .catch(e => {
        console.log("Error recuperando url de imagen: " + e);
      });
  };

  const uploadImage = async (uri, uid) => {
    const response1 = await fetch(uri);
    const blob = await response1.blob();
    //console.log(blob);
    const ref = firebase
      .storage()
      .ref()
      .child(`avatar/${uid}`);
    return ref.put(blob);
  };

  return (
    <View style={styles.viewUserInfo}>
      <Avatar
        rounded
        size="large"
        showEditButton
        onEditPress={changeAvatar}
        containerStyle={styles.userInfoAvatar}
        source={{
          uri: photoURL
            ? photoURL
            : "https://api.adorable.io/avatars/118/abott@adorable.png"
        }}
      />
      <View>
        <Text style={styles.displayName}>{displayName}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewUserInfo: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    paddingTop: 30,
    paddingBottom: 30
  },
  userInfoAvatar: {
    marginRight: 20
  },
  displayName: {
    fontWeight: "bold"
  }
});
