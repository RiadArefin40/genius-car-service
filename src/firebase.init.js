// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnxwRg56FrglzH6RTXBgFOuITiiIYX-xc",
  authDomain: "genius-car-service-8b7a6.firebaseapp.com",
  projectId: "genius-car-service-8b7a6",
  storageBucket: "genius-car-service-8b7a6.appspot.com",
  messagingSenderId: "1031429545878",
  appId: "1:1031429545878:web:d55fcc645327f4a8acc7b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
