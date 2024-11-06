// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const api_key = import.meta.env.VITE_API;
const FirebaseConfig = {
  apiKey: api_key,
  authDomain: "taskmanager-f8284.firebaseapp.com",
  projectId: "taskmanager-f8284",
  storageBucket: "taskmanager-f8284.firebasestorage.app",
  messagingSenderId: "824371326652",
  appId: "1:824371326652:web:578009a66c0dcfd768eab9",
  measurementId: "G-R8DECPRM9V",
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
