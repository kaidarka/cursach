import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/compat";
import "firebase/firestore";
import 'firebase/storage'
import "firebase/auth";


firebase.initializeApp({
    apiKey: "AIzaSyBZ6wiG29AuJiNrSCc22W28fWYipOkhumg",
    authDomain: "cursach-7ec5c.firebaseapp.com",
    databaseURL: "https://cursach-7ec5c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cursach-7ec5c",
    storageBucket: "cursach-7ec5c.appspot.com",
    messagingSenderId: "591540605840",
    appId: "1:591540605840:web:36a97b8d7249438bba1915"
});
export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore,
        storage
    }}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Context.Provider>
  ,
  document.getElementById('root')
);

