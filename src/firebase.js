import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyCGi8Ze3IaYYOO7Pq0MuEFzVW-6Kt6aDTU",
    authDomain: "axios-3.firebaseapp.com",
    databaseURL: "https://axios-3.firebaseio.com",
    projectId: "axios-3",
    storageBucket: "axios-3.appspot.com",
    messagingSenderId: "25311161577",
    appId: "1:25311161577:web:44be29e0a79078df909478",
    measurementId: "G-SGX0ZC8152"

  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;