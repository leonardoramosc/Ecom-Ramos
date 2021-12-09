// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeiuq9DDyaOiP13Pck2OmkckE77OVbFgc",
  authDomain: "everymarket-89a09.firebaseapp.com",
  projectId: "everymarket-89a09",
  storageBucket: "everymarket-89a09.appspot.com",
  messagingSenderId: "619504076440",
  appId: "1:619504076440:web:7af6a5ebee99024f3732ed",
  measurementId: "G-8PPTJRXYHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);