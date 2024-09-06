// config/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // jika menggunakan Firestore

const firebaseConfig = {
  apiKey: process.env.APIKEY_FIREBASE,
  authDomain: process.env.AUTHDOMAIN_FIREBASE,
  projectId: process.env.PROJECTID_FIREBASE,
  storageBucket: process.env.STORAGEBUCKET_FIREBASE,
  messagingSenderId: process.env.SENDERID_FIREBASE,
  appId: process.env.APPID_FIREBASE,
  measurementId: process.env.MEASUREMENTID_FIREBASE,
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp); // jika menggunakan Firestore

export { firebaseApp, db };
