// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKFnc7bt02h_NwkttjMXAHDHoOJpQPKOQ",
  authDomain: "firstts-f23c7.firebaseapp.com",
  projectId: "firstts-f23c7",
  storageBucket: "firstts-f23c7.firebasestorage.app",
  messagingSenderId: "773331000197",
  appId: "1:773331000197:web:9c2bace606b09d691d82ec",
  measurementId: "G-DNPECJ0F5H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();