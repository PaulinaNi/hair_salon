import { initializeApp } from "firebase/app";

const firebaseConfig = {
 apiKey: process.env.EACT_APP_FIREBASE,
 authDomain: "hairsalon-88332.firebaseapp.com",
 projectId: "hairsalon-88332",
 storageBucket: "hairsalon-88332.appspot.com",
 messagingSenderId: "1050054581741",
 appId: "1:1050054581741:web:3e7a8d97d0a1f02e99dbe4",
 measurementId: "G-PMC52L9CM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);