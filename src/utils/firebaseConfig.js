// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD6mUPRmBAo2z1-ILtoL8jT9ga1WCOvVNo",
  authDomain: "firegram-38f33.firebaseapp.com",
  projectId: "firegram-38f33",
  storageBucket: "firegram-38f33.appspot.com",
  messagingSenderId: "937708434166",
  appId: "1:937708434166:web:b93f27f1e0682186cc32d7"
};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, storage, timestamp };