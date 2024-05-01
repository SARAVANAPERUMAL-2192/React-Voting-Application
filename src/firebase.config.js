// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_3EFNu7tZt1fFBquX3GUYX-FRoSJNdRo",
  authDomain: "sfffsf.firebaseapp.com",
  projectId: "sfffsf",
  storageBucket: "sfffsf.appspot.com",
  messagingSenderId: "720703945005",
  appId: "1:720703945005:web:60247709c3190e32077ba4",
  measurementId: "G-SEYQ51HJ4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

