import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyByuFhJglTG0EJTvNATpGZBAiXWmaRJdFY",
    authDomain: "axios-803df.firebaseapp.com",
    databaseURL: "https://axios-803df.firebaseio.com",
    projectId: "axios-803df",
    storageBucket: "axios-803df.appspot.com",
    messagingSenderId: "195609141993",
    appId: "1:195609141993:web:255edabd9659aa0d688678",
    measurementId: "G-68SBFX5DW2"

  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;