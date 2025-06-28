import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFco0j6qnSP75wzd5Fu8775VW17DXRbCw",
  authDomain: "portfolio-v1-5bb2c.firebaseapp.com",
  projectId: "portfolio-v1-5bb2c",
  storageBucket: "portfolio-v1-5bb2c.firebasestorage.app",
  messagingSenderId: "786515199249",
  appId: "1:786515199249:web:d6ca078d6e9a4e2ff278b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };