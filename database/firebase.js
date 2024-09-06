


// Initialize Firebase

import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBATEAUI04TnSXm7EqscJDOvVxr0rFe1Jg",
  authDomain: "reactfirebase-cc4e8.firebaseapp.com",
  databaseURL: "https://reactfirebase-cc4e8-default-rtdb.firebaseio.com",
  projectId: "reactfirebase-cc4e8",
  storageBucket: "reactfirebase-cc4e8.appspot.com",
  messagingSenderId: "1026546808451",
  appId: "1:1026546808451:web:85bd93600f05086ba38db6",
  measurementId: "G-42JWJSYEYK"
};

firebase.initializeApp(firebaseConfig);
export default firebase;

