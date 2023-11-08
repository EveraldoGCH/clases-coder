import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzkodWvkygxii0kj1F4GVFV858CLLwTqs",
  authDomain: "prueba-3e848.firebaseapp.com",
  projectId: "prueba-3e848",
  storageBucket: "prueba-3e848.appspot.com",
  messagingSenderId: "4674143325",
  appId: "1:4674143325:web:1889b92ae2a540b0dfb9b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
