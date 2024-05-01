// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCG-JshfMY9MtWAGsosx-MAgFnnkSKV2c",
  authDomain: "ttthdsrg.firebaseapp.com",
  projectId: "ttthdsrg",
  storageBucket: "ttthdsrg.appspot.com",
  messagingSenderId: "114754618504",
  appId: "1:114754618504:web:e50af9d4f227ac7cfe0b3d",
  measurementId: "G-4DWTG3RJJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

