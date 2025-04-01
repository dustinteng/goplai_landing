// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4F9WLMDadlzCUbkZOxoxnpr8o2szKDkM",
  authDomain: "goplai-landing.firebaseapp.com",
  projectId: "goplai-landing",
  storageBucket: "goplai-landing.firebasestorage.app",
  messagingSenderId: "247137822448",
  appId: "1:247137822448:web:64530ccbdec15186374435",
  measurementId: "G-C4NZFRXDRV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };
