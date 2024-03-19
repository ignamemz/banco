import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyAFK5uZCP2EfUaoP95DxaC7xs0P4VENgVc",
  authDomain: "my-bank-awesome.firebaseapp.com",
  projectId: "my-bank-awesome",
  storageBucket: "my-bank-awesome.appspot.com",
  messagingSenderId: "731855471934",
  appId: "1:731855471934:web:f448b988b1404bed32186f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)