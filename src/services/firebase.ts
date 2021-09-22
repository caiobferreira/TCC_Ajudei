import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyBjk7nPMNVGoOIaT1Odo5J60L81-rGftYo",
  authDomain: "ajudei-721a9.firebaseapp.com",
  databaseURL: "https://ajudei-721a9-default-rtdb.firebaseio.com",
  projectId: "ajudei-721a9",
  storageBucket: "ajudei-721a9.appspot.com",
  messagingSenderId: "306626653650",
  appId: "1:306626653650:web:a23dc7d1843dc87acfec0b"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const database = firebase.database();

  export {firebase, auth, database};