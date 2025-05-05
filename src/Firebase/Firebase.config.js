// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChL5KaSmWs_PG7kvWGpcasLpPTKT6dtGI",
  authDomain: "paybill-assign9.firebaseapp.com",
  projectId: "paybill-assign9",
  storageBucket: "paybill-assign9.firebasestorage.app",
  messagingSenderId: "997070019551",
  appId: "1:997070019551:web:e74b9f26f8bb52d813c26a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth();