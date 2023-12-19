// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqlmyorRRN-29z4IsWDTSV8IizH6VbRY8",
  authDomain: "fir-project01-a8d36.firebaseapp.com",
  projectId: "fir-project01-a8d36",
  storageBucket: "fir-project01-a8d36.appspot.com",
  messagingSenderId: "484957260508",
  appId: "1:484957260508:web:4561e8bae8fbf3f0d38219",
  measurementId: "G-ZNWMNS9NGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();