import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyB9XELzAqbA-d9wXC0I7AzJVAopskdf3xE",
    authDomain: "devs-interview-project.firebaseapp.com",
    projectId: "devs-interview-project",
    storageBucket: "devs-interview-project.appspot.com",
    messagingSenderId: "432236463617",
    appId: "1:432236463617:web:cdac5ee4d00ee28b09a200"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 
