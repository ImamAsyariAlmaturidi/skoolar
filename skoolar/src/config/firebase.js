// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: process.env.APIKEY_FIREBASE,
  authDomain: process.env.AUTHDOMAIN_FIREBASE,
  projectId: process.env.PROJECTID_FIREBASE,
  storageBucket: process.env.STORAGEBUCKET_FIREBASE,
  messagingSenderId: process.env.SENDERID_FIREBASE,
  appId: process.env.APPID_FIREBASE,
  measurementId: process.env.MEASUREMENTID_FIREBASE,
};

export const app = initializeApp(firebaseConfig);
