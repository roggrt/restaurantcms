// src/config/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";





const firebaseConfig = {
  apiKey: "AIzaSyBfnJuQnD5NyK9sWi581YUrNdeEWUdtwxE",
  authDomain: "restaurantcms-d0813.firebaseapp.com",
  projectId: "restaurantcms-d0813",
  storageBucket: "restaurantcms-d0813.firebasestorage.app",
  messagingSenderId: "197714357320",
  appId: "1:197714357320:web:a58c256a62881ddf237c7d",
  measurementId: "G-W4VNZ4E84Q"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);


export { auth, db, storage, analytics };