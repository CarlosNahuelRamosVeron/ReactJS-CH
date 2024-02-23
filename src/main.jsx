import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYJO_zCdEDTZy9uugRDYN5Cr60cxMg580",
  authDomain: "ch-react-35bdf.firebaseapp.com",
  projectId: "ch-react-35bdf",
  storageBucket: "ch-react-35bdf.appspot.com",
  messagingSenderId: "937595624524",
  appId: "1:937595624524:web:816c62815a5e66341f28e9"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
