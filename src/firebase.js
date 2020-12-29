import { PanToolSharp } from "@material-ui/icons";
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5TI-cpdnkZcKhMRg0ITp9G7vcznvN4Tc",
  authDomain: "clone-660ee.firebaseapp.com",
  projectId: "clone-660ee",
  storageBucket: "clone-660ee.appspot.com",
  messagingSenderId: "982482142636",
  appId: "1:982482142636:web:ee20f8652145241ce06609",
  measurementId: "G-SDYWD5MYWV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };

// Firebase deploy

// npm i -g firebase-tools

// firebase login

// firebase init
// Select Hosting: Configure and deploy Firebase Hosting sites
// Select Use an existing project
// Select project name
// What do you want to use as your public directory? build
// Configure as a single-page app (rewrite all urls to /index.html)? y
// Set up automatic builds and deploys with GitHub? y push the code to repo 

// npm run build ( run this command if you make changes to code after deploying)

// firebase deploy
