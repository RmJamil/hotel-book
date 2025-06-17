// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWfZuzi5Q7416dAJhBqRZ9pXtgqEIS1w8",
  authDomain: "hotel-booking-client-b0a32.firebaseapp.com",
  projectId: "hotel-booking-client-b0a32",
  storageBucket: "hotel-booking-client-b0a32.firebasestorage.app",
  messagingSenderId: "733622923400",
  appId: "1:733622923400:web:c50d5cfc7928e129eeef3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;