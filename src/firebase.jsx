// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    /*apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID*/
    apiKey: "AIzaSyAMYl4PB8pYaB4wOkiyPd9qM0IlC8wj6Wc",
    authDomain: "rksp6-34501.firebaseapp.com",
    projectId: "rksp6-34501",
    storageBucket: "rksp6-34501.appspot.com",
    messagingSenderId: "596989206909",
    appId: "1:596989206909:web:2ce19c3b9f0689230e2c14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);