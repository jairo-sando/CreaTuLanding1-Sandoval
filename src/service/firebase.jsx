// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG7J9P7_FUeDGaP_q_3eZloPBPb81cg7w",
  authDomain: "rincondeldescanso-f16df.firebaseapp.com",
  projectId: "rincondeldescanso-f16df",
  storageBucket: "rincondeldescanso-f16df.firebasestorage.app",
  messagingSenderId: "711138718184",
  appId: "1:711138718184:web:b2e5bd0e7efd1e20ad745d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)