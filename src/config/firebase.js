/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxQyeEi2WeeCTzwNfgq9emenVYUDlOW1k",
  authDomain: "reactjs-janeiro.firebaseapp.com",
  projectId: "reactjs-janeiro",
  storageBucket: "reactjs-janeiro.firebasestorage.app",
  messagingSenderId: "1092013448958",
  appId: "1:1092013448958:web:eb643926d45d7e36608faf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export firebaseConfig
export { firebaseConfig };