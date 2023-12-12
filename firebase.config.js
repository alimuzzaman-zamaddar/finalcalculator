// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBb3Zu0LKSntDZDCCTBByb5EcH36Zywfc",
  authDomain: "gpacalculator-f125a.firebaseapp.com",
  projectId: "gpacalculator-f125a",
  storageBucket: "gpacalculator-f125a.appspot.com",
  messagingSenderId: "242772610126",
  appId: "1:242772610126:web:77e98b056d9fa611d3871f",
  measurementId: "G-4FWPDQ4QQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);