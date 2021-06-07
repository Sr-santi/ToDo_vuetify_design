
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
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig)
firebase.analytics();

const db = firebase.firestore()

/* db.settings({ timestampsInSnapshots: true }) */
export default db
