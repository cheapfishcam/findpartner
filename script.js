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



let submitbtn = document.getElementById('submit');
let searchbtn = document.getElementById('searchbtn');
let card = document.getElementById('card');
let resultcard = document.getElementById('resultcard');
let partner1info = document.getElementById("part1info");





var database = firebase.database();
var ref = database.ref('list');



submitbtn.addEventListener('click' , submitfunc);

//pushes user inputs to database
function submitfunc(){
var ptname = document.getElementById("patient").value;
let drinfo = document.getElementById('dr').value;
let patientno = document.getElementById('patientno').value;
let info = {
  //assigns these keys to user input
   patientname : ptname,
   fileno : patientno,
   dr : drinfo

}
ref.push(info);
//should clear input value in both fields after user pressses submit (optional)
}

searchbtn.addEventListener('click',findPatient);

let hothena = [];


function findPatient(){
  let fileNoinput = document.getElementById('searchpatientname').value;
  card.style.display = 'none';
  resultcard.style.display = 'block';
  ref.on('value', gotData , errData);
  function gotData(data){
    let theObject = data.val();
    const theArraay = Object.entries(theObject)
    for (var i = 0; i < theArraay.length; i++) {
      if (theArraay[i][1].fileno == fileNoinput) {
        hothena.push(theArraay[i][1].dr);
       part1info.innerHTML =  hothena;
        console.log(hothena);
      }
      else {
        part1info.innerHTML = 'There are no doctors assigned for that patient';
      }
    }

}
  function errData(err){
    console.log(err);
  }

/*
  function gotData(data){
    if(fileNoinput ==0){
      partner1info.innerHTML = data.val();
    }
  }
  function errData(err){
    console.log(err);
  }

*/
}
