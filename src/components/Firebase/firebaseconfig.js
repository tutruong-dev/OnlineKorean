import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Import Firebase Authentication

// Cấu hình Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDuIGy9kc8bkFKSiKayzxLXwXRu4uNkoNs",
    authDomain: "fir-firebase-fda76.firebaseapp.com",
    projectId: "fir-firebase-fda76",
    storageBucket: "fir-firebase-fda76.appspot.com",
    messagingSenderId: "731785923260",
    appId: "1:731785923260:web:61976bad056ea582621eb9",
    measurementId: "G-VEY09FVB1Y"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo Firestore
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app); // Initialize Firebase Authentication

export { db, storage, collection, addDoc, getDocs, ref, uploadBytes, getDownloadURL, auth, signInWithEmailAndPassword, query, where };
