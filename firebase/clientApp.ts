// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjgIk7QGLwjyIcEzSlYNRD9WMqptm201Q",
  authDomain: "facebook-clo-4d0e6.firebaseapp.com",
  projectId: "facebook-clo-4d0e6",
  storageBucket: "facebook-clo-4d0e6.appspot.com",
  messagingSenderId: "1090464752234",
  appId: "1:1090464752234:web:c8564e6a228c7ecad0a013",
  measurementId: "G-W2HSQDQW3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);