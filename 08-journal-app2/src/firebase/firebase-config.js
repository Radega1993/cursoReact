import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyrhV7MDHLVmzJ0qsEla6d_ge1G4jDA4w",
  authDomain: "react-app-curso-515e5.firebaseapp.com",
  projectId: "react-app-curso-515e5",
  storageBucket: "react-app-curso-515e5.appspot.com",
  messagingSenderId: "752148311440",
  appId: "1:752148311440:web:2931e428aa4dd70dbfd715"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}
