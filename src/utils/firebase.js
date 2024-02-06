// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7hE4OkP-WuAyxvrKvCEK02FaU61dButo",
  authDomain: "netflixgpt-ee804.firebaseapp.com",
  projectId: "netflixgpt-ee804",
  storageBucket: "netflixgpt-ee804.appspot.com",
  messagingSenderId: "651060407739",
  appId: "1:651060407739:web:0db6def4b1330a667ae89e",
  measurementId: "G-EDC31GKWTM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
