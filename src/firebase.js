import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyByuFhJglTG0EJTvNATpGZBAiXWmaRJdFY",
    authDomain: "axios-803df.firebaseapp.com",
    databaseURL: "https://axios-803df.firebaseio.com",
    projectId: "axios-803df",
    storageBucket: "axios-803df.appspot.com",
    messagingSenderId: "195609141993",
    appId: "1:195609141993:web:7310f653a2493bb7688678",
    measurementId: "G-DM5QVXDNGP"

  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;