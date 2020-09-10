import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBbcGCQpnkVSYLu_8JU8_T8EDumZ5ocYMk",
    authDomain: "clone-fbff7.firebaseapp.com",
    databaseURL: "https://clone-fbff7.firebaseio.com",
    projectId: "clone-fbff7",
    storageBucket: "clone-fbff7.appspot.com",
    messagingSenderId: "906389878984",
    appId: "1:906389878984:web:93052085d0405ee1110dfd"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };