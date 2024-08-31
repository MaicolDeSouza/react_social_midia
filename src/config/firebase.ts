// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUQizC4oLV32cwHcpbr0G5fz4xV9i1vGA",
  authDomain: "react-social-media-206f9.firebaseapp.com",
  projectId: "react-social-media-206f9",
  storageBucket: "react-social-media-206f9.appspot.com",
  messagingSenderId: "180902845664",
  appId: "1:180902845664:web:9bf3dea59ff726efc54485"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
