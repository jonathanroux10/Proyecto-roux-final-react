import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCs92i46ogklNks44IHIes5nvXnBgkO7G8",
  authDomain: "proyecto-roux-final.firebaseapp.com",
  projectId: "proyecto-roux-final",
  storageBucket: "proyecto-roux-final.appspot.com",
  messagingSenderId: "264695135058",
  appId: "1:264695135058:web:7adaaf7e31833f7a69188b"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);