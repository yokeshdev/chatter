// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV8I9DmUEcnHXajWX21ViqCbO9M6iOoCQ",
  authDomain: "react-chat1-cdbb0.firebaseapp.com",
  projectId: "react-chat1-cdbb0",
  storageBucket: "react-chat1-cdbb0.appspot.com",
  messagingSenderId: "198733347823",
  appId: "1:198733347823:web:bc1966c55eae884040941a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();