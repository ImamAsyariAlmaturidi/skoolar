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

// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp); // jika menggunakan Firestore

//ubah
//ganti
const firebaseAssignmentConfig = {
  apiKey: "AIzaSyDyuQ943dPpDHPVvJO_CZxTWX-I_Yftt0c",
  authDomain: "skoolar-testing.firebaseapp.com",
  projectId: "skoolar-testing",
  storageBucket: "skoolar-testing.appspot.com",
  messagingSenderId: "442512337748",
  appId: "1:442512337748:web:86dad9324870a766b076c1",
};

const firebaseAssagimentApp = initializeApp(firebaseAssignmentConfig);
const dbAssignment = getFirestore(firebaseAssagimentApp); // jika menggunakan Firestore
export { firebaseAssagimentApp, dbAssignment };
