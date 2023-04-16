// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBTvtzuZdQ2AhQi-CRdgJc-12S6XzP6Fo",
  authDomain: "fuggy-89d56.firebaseapp.com",
  projectId: "fuggy-89d56",
  storageBucket: "fuggy-89d56.appspot.com",
  messagingSenderId: "789162000433",
  appId: "1:789162000433:web:44740924b65132e9d4d510",
  measurementId: "G-R2BG1WX2WZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
