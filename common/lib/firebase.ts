// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuoWzQAsPcEgTgUWxMs6vGabioUkq6kDo",
  authDomain: "nextjs-x-notion.firebaseapp.com",
  projectId: "nextjs-x-notion",
  storageBucket: "nextjs-x-notion.appspot.com",
  messagingSenderId: "640944060364",
  appId: "1:640944060364:web:60ec7f3416aecee4e94f69",
  measurementId: "G-P97Z5700ZS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbFireStore = getFirestore(app);
export const notionCollectionRef = collection(dbFireStore, "notion");
