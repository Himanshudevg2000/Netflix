// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq0rpcI69XLO5YZx7J7WgCe8VEo06ytcg",
  authDomain: "netflixgpt-cf48a.firebaseapp.com",
  projectId: "netflixgpt-cf48a",
  storageBucket: "netflixgpt-cf48a.appspot.com",
  messagingSenderId: "814326635506",
  appId: "1:814326635506:web:29742f06293e1fd6a1e96b",
  measurementId: "G-SED2TTR0E8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();