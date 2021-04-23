import firebase from '@firebase/app';
import "@firebase/auth";
import "@firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDCLNeE3sB4EkvjTRdBPHPgf4q9ysvhS20",
  authDomain: "testyourself-c200c.firebaseapp.com",
  projectId: "testyourself-c200c",
  storageBucket: "testyourself-c200c.appspot.com",
  messagingSenderId: "55018044333",
  appId: "1:55018044333:web:0b650696df0005f32cff24",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
