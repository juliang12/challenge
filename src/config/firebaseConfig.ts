// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { Notes } from "models/interface/notesInterface";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjRvhiCZ9ZSwSyDTyWa-nNVmQevHiTtcc",
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




// export const handleNote = async (notes:Notes)=>{
//   try {
//    const newData = {
//     titulo: notes.titulo,
//     tipo: notes.tipo,
//     descripcion: notes.descripcion,
//     fecha: Date.now()

//    } 

//    await addDoc(ref, newData)
//   } catch (error:any) {
// console.log(error.message)
//   }
// }

