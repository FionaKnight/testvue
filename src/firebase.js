/* eslint-disable no-unused-vars */
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDG-Xk2U3fAjfMPd21JECdB2jk7bqxI4Gw",
    authDomain: "testvue-flk.firebaseapp.com",
    databaseURL: "https://testvue-flk.firebaseio.com",
    projectId: "testvue-flk",
    storageBucket: "testvue-flk.appspot.com",
    messagingSenderId: "41108637591",
    appId: "1:41108637591:web:66d0862160eab55907a6d2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default {
    auth: firebase.auth(),
   
}