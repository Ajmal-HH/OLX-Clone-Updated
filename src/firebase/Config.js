// Import Firebase App (the core Firebase SDK)
import { initializeApp } from 'firebase/app';

// Import Firebase services that you need
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyC8aizKjY6gJ756JUMKJmkwgFS6GsCGj9Q",
  authDomain: "fir-767f4.firebaseapp.com",
  projectId: "fir-767f4",
  storageBucket: "fir-767f4.appspot.com",
  messagingSenderId: "219126836159",
  appId: "1:219126836159:web:7fe86b8925bd2e0fb38f0a",
  measurementId: "G-Q85FDNCFHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase services
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage, app as default };
