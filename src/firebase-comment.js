import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCFco0j6qnSP75wzd5Fu8775VW17DXRbCw",
  authDomain: "portfolio-v1-5bb2c.firebaseapp.com",
  projectId: "portfolio-v1-5bb2c",
  storageBucket: "portfolio-v1-5bb2c.firebasestorage.app",
  messagingSenderId: "786515199249",
  appId: "1:786515199249:web:a07d2a1384410fe9f278b0"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };