// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sterling-mern.firebaseapp.com",
  projectId: "sterling-mern",
  storageBucket: "sterling-mern.appspot.com",
  messagingSenderId: "942795616515",
  appId: "1:942795616515:web:34f9b643a69f8631e13936",
  measurementId: "G-SHK2DJEN7V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);