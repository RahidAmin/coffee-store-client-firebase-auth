// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmwZECV_fkWV2Oxx-13lNqxEQw_9TUob0",
    authDomain: "coffee-store-13c36.firebaseapp.com",
    projectId: "coffee-store-13c36",
    storageBucket: "coffee-store-13c36.firebasestorage.app",
    messagingSenderId: "891216276324",
    appId: "1:891216276324:web:a78c4bef7e44e698612871"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;