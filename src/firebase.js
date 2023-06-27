import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  // Your Firebase configuration goes here
  apiKey: "AIzaSyDqEW1YC_3bNLXch4Fafz_oUz102GF-cIc",
  authDomain: "clone-dae6e.firebaseapp.com",
  projectId: "clone-dae6e",
  storageBucket: "clone-dae6e.appspot.com",
  messagingSenderId: "103214257398",
  appId: "1:103214257398:web:5881fd6111b0a9e68b88d7",
  measurementId: "G-CNBKCTKVY4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db };
