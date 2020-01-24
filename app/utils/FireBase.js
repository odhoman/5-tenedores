import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCQ_swsYej2woXbMONBPa5o209bdhDDIlQ",
  authDomain: "tenedores-16b86.firebaseapp.com",
  databaseURL: "https://tenedores-16b86.firebaseio.com",
  projectId: "tenedores-16b86",
  storageBucket: "tenedores-16b86.appspot.com",
  messagingSenderId: "592880894719",
  appId: "1:592880894719:web:51081e685c1281620582ca",
  measurementId: "G-JDELW0T7D3"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
