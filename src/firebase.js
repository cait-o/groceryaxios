import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyCQAhO3FfR9884R8cYjDt9irdV8Gmk2cNE",
    authDomain: "vue-firebase-3a245.firebaseapp.com",
    databaseURL: "https://vue-firebase-3a245.firebaseio.com",
    projectId: "vue-firebase-3a245",
    storageBucket: "vue-firebase-3a245.appspot.com",
    messagingSenderId: "937120501050",
    appId: "1:937120501050:web:28ceb158f700448e719403",
    measurementId: "G-74YZQGGJP4"

  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;