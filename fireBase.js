// Initialize Firebase
var app_fireBase = {};

(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBUGUjS7M_QDrwdtY6Af7O8-hc6fA0wink",
    authDomain: "findpartner-9c012.firebaseapp.com",
    databaseURL: "https://findpartner-9c012.firebaseio.com",
    projectId: "findpartner-9c012",
    storageBucket: "findpartner-9c012.appspot.com",
    messagingSenderId: "52089296201"
  };
  firebase.initializeApp(config);
  app_fireBase = firebase;
})()
