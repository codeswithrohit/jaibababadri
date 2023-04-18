
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


const firebaseConfig = {
    //Paste Your firebase config here
   
    apiKey: "AIzaSyAnDYXcYgYXy4932LjLbvV4U3ZPveEj2as",
    authDomain: "rohitquiz-204c5.firebaseapp.com",
    projectId: "rohitquiz-204c5",
    storageBucket: "rohitquiz-204c5.appspot.com",
    messagingSenderId: "119848447467",
    appId: "1:119848447467:web:b1f938b8cc1b0110b27dae",
    
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase }