import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAphvJCGYtskwrBrf7o-BCqZx7d6EjIZoc",
    authDomain: "portray-eedc3.firebaseapp.com",
    projectId: "portray-eedc3",
    storageBucket: "portray-eedc3.appspot.com",
    messagingSenderId: "230339165363",
    appId: "1:230339165363:web:b353dab6582d7e9ebc04c6",
    measurementId: "G-HC25FFSCZ3"
  };

const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };


