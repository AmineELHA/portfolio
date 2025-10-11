import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration object
// Uses environment variables but falls back to the provided values
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCjqcC9O7ipPEH4H5YIFpzmWjjUx5m5wB4",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "port-c7947.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "port-c7947",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "port-c7947.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "646337070957",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:646337070957:web:700a1cbf219cb2fed33c64",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-NSK1W719QF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Export the app as default
export default app;