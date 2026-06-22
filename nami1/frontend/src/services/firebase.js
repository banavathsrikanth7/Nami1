// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // 🔹 import Firestore

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1DiPW8v4ywAVyXN8a-Ke1y3VsehDIv2o",
  authDomain: "login-auth-d690f.firebaseapp.com",
  projectId: "login-auth-d690f",
  storageBucket: "login-auth-d690f.firebasestorage.app",
  messagingSenderId: "402759143485",
  appId: "1:402759143485:web:d642717cc3431c2eed1a54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app); // 🔹 initialize and export Firestore
