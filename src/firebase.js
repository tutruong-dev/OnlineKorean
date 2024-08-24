// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_UDZGMcTTMjfWgxW6IlDenC-0Ht3gv9g",
  authDomain: "onl-korean.firebaseapp.com",
  projectId: "onl-korean",
  storageBucket: "onl-korean.appspot.com",
  messagingSenderId: "162100882836",
  appId: "1:162100882836:web:a997d405a63094d820b381",
  measurementId: "G-KDEF94K9JS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db};