import firebase from "firebase";
import "@firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAAc0TSTI9MFe7fUQlsUq0fvMvOrAUsTBw",
  authDomain: "cf-sheeda123.firebaseapp.com",
  projectId: "cf-sheeda123",
  storageBucket: "cf-sheeda123.appspot.com",
  messagingSenderId: "606881641915",
  appId: "1:606881641915:web:d16136a055ad5e93b0409e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebaseConfig;
