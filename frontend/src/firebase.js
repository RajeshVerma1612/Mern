// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-c6f54.firebaseapp.com",
  projectId: "mern-c6f54",
  storageBucket: "mern-c6f54.appspot.com",
  messagingSenderId: "929081659924",
  appId: "1:929081659924:web:63911a3dd44198dbd74d01",
  measurementId: "G-R5EFQCMG16"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);