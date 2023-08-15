import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBP4UuKCjEWr5KqTX6EmzoOrPWcDhD-VMI",
  authDomain: "chat2-fa193.firebaseapp.com",
  projectId: "chat2-fa193",
  storageBucket: "chat2-fa193.appspot.com",
  messagingSenderId: "597077309387",
  appId: "1:597077309387:web:f62b4fa1d4bfe20eac284e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
