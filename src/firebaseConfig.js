// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMxqWt4ED4V86U-FCfVHtTsQwMhwlZPGs",
  authDomain: "agrobot-a5f85.firebaseapp.com",
  databaseURL: "https://agrobot-a5f85-default-rtdb.firebaseio.com",
  projectId: "agrobot-a5f85",
  storageBucket: "agrobot-a5f85.appspot.com",
  messagingSenderId: "268708207024",
  appId: "1:268708207024:web:7b5cf81c2b332e55d71e75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db }; 