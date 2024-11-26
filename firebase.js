// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkpy560L5CPwVofUNsuTeM-2EQAW47VD0",
  authDomain: "zipdata-95a70.firebaseapp.com",
  projectId: "zipdata-95a70",
  storageBucket: "zipdata-95a70.firebasestorage.app",
  messagingSenderId: "937723911094",
  appId: "1:937723911094:web:bcfc7cdbbab8511a49bf17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
