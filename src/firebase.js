import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyBoXsnO1yE5HAvjQFLxtR9MgkOl67YA584",
    authDomain: "axios-2-2c328.firebaseapp.com",
    databaseURL: "https://axios-2-2c328.firebaseio.com",
    projectId: "axios-2-2c328",
    storageBucket: "axios-2-2c328.appspot.com",
    messagingSenderId: "263810540541",
    appId: "1:263810540541:web:10332ad0467130e9caef94",
    measurementId: "G-3L69KHEKNG"

  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;