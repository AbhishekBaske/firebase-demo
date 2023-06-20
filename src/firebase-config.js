import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCSktwRDyfG0Wehbw_T4iKo949vjn191GA",
  authDomain: "fir-cc194.firebaseapp.com",
  projectId: "fir-cc194",
  storageBucket: "fir-cc194.appspot.com",
  messagingSenderId: "222352752451",
  appId: "1:222352752451:web:c6faaa658a2c8ebe6b39f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)