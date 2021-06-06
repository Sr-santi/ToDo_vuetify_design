
//import 'firebase/firestore'
var firebase = require('firebase/app').default;
require('firebase/auth');
require('firebase/database');
require('firebase/storage');
require('firebase/analytics');
require("firebase/firestore");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDrcyCco18CpgeYe7JlbgRfjIgX8DcdzAw",
    authDomain: "todo-sr-exchange.firebaseapp.com",
    projectId: "todo-sr-exchange",
    storageBucket: "todo-sr-exchange.appspot.com",
    messagingSenderId: "247594724868",
    appId: "1:247594724868:web:57de06449211fef2934f51",
    measurementId: "G-R1QYFG3CTS"
};
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig)
firebase.analytics();

const db = firebase.firestore()

/* db.settings({ timestampsInSnapshots: true }) */
export default db
