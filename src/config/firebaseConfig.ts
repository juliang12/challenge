// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { collection, getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_KEY,
  authDomain: "challengeapp-1c4f4.firebaseapp.com",
  projectId: "challengeapp-1c4f4",
  storageBucket: "challengeapp-1c4f4.appspot.com",
  messagingSenderId: "695013565144",
  appId: "1:695013565144:web:28bdfea16dedd4fbbbadad"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

export const ref = collection(db, "notes");



