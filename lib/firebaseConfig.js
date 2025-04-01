// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

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

// Initialize analytics only on the client side
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

const db = getFirestore(app);

export { db, analytics };
