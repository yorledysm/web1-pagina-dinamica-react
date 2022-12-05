// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'; // importar base de datos 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6MdvT3nDJQiDyvP5xhnJupZ3ouD5zInA",
  authDomain: "restauransts-app.firebaseapp.com",
  projectId: "restauransts-app",
  storageBucket: "restauransts-app.appspot.com",
  messagingSenderId: "1098462399462",
  appId: "1:1098462399462:web:bad577b5135b4f6281a427"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const FirebaseFirestore=getFirestore(app);

export {
    FirebaseFirestore,
}