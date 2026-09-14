import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'   //getAuth->has authentication tools

const firebaseConfig = {
  apiKey: "AIzaSyAY_qLyDDQfkLOqXv1n1CJWKYrHUNfOGcw",
  authDomain: "blog-app-251e4.firebaseapp.com",
  projectId: "blog-app-251e4",
  storageBucket: "blog-app-251e4.firebasestorage.app",
  messagingSenderId: "83967525300",
  appId: "1:83967525300:web:8258ebe1b3d6c21a4232e1",
  measurementId: "G-111255XBJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)   //auth=app+authentication functionality
export default auth  //this auth  variable knows the user is login or logout this var for store user data into firebase 