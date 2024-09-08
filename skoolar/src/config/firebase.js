// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYOb5bkQb67zpehncubV17e5jVFEn_vY0",
  authDomain: "skoolar-1902b.firebaseapp.com",
  projectId: "skoolar-1902b",
  storageBucket: "skoolar-1902b.appspot.com",
  messagingSenderId: "263358128579",
  appId: "1:263358128579:web:bd0254a95cfb490bab1d76",
  measurementId: "G-N8HDC02T1K",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db, firebaseApp };
