// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "nextjs-x-notion.firebaseapp.com",
  projectId: "nextjs-x-notion",
  storageBucket: "nextjs-x-notion.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: "G-P97Z5700ZS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbFireStore = getFirestore(app);
export const notionCollectionRef = collection(dbFireStore, "notion");
