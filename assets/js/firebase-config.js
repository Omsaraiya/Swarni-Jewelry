// assets/js/firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

// Your Keys
const firebaseConfig = {
    apiKey: "AIzaSyCJrBwg0RW4Z7eQvEOkTgyyM7DDdu_YzJM",
    authDomain: "svarni-jewelry.firebaseapp.com",
    projectId: "svarni-jewelry",
    storageBucket: "svarni-jewelry.firebasestorage.app",
    messagingSenderId: "1073048278419",
    appId: "1:1073048278419:web:db29ddafc54d6018a64466",
    measurementId: "G-6ME9S5M38C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc, ref, uploadBytes, getDownloadURL };
