import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC3OOWXStZxOooGwWEMWW3DsVBes1WA0Mo",
    authDomain: "fb-app-7e91b.firebaseapp.com",
    projectId: "fb-app-7e91b",
    storageBucket: "fb-app-7e91b.appspot.com",
    messagingSenderId: "492190227914",
    appId: "1:492190227914:web:f5ea90f22597e13fa78333",
    measurementId: "G-Q2RMXQTH4P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;