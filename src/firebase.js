import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAddiTgDbTc73JxcaatWvsSIloMOSCDbp4",
  authDomain: "clone-3c213.firebaseapp.com",
  databaseURL: "https://clone-3c213.firebaseio.com",
  projectId: "clone-3c213",
  storageBucket: "clone-3c213.appspot.com",
  messagingSenderId: "1009687511472",
  appId: "1:1009687511472:web:401dfbde481a77e8019675",
  measurementId: "G-CWBLBDK3FM",
});

//const db = firebaseApp.firstore();
const auth = firebase.auth();
export { auth };
