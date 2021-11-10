import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO-tdzxwUnPi_9dDYEQWSpEpnfqHLbLPw",
  authDomain: "fintappwebsite.firebaseapp.com",
  databaseURL:
    "https://fintappwebsite-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fintappwebsite",
  storageBucket: "fintappwebsite.appspot.com",
  messagingSenderId: "784957230577",
  appId: "1:784957230577:web:942c2a4ad17567dd354850",
  measurementId: "G-XKCCJBJQKC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, app };

// Import the functions you need from the SDKs you need
