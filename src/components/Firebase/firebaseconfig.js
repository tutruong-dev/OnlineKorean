import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc,getDocs  } from 'firebase/firestore';
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
  const app = initializeApp(firebaseConfig);

// Khởi tạo Firestore
const db = getFirestore(app);

export { db, collection, addDoc,getDocs };