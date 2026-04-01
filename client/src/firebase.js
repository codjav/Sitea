// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sitea-5bb8c.firebaseapp.com",
  projectId: "sitea-5bb8c",
  storageBucket: "sitea-5bb8c.firebasestorage.app",
  messagingSenderId: "72763926280",
  appId: "1:72763926280:web:31b45a56baed3ea68f6ebd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}
