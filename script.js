let submitbtn = document.getElementById('submit');


let drnames = [
   "Mohamed Tarek-15122",
   'vdvvv'
];

let patient_names = [
  'ffbfbf',
  'vdvdvd'
]

submitbtn.addEventListener('click' , submitfunc);
localStorage.clear();
console.log(localStorage);

//pushes user inputs to localStorage
function submitfunc(){
let patientname = document.getElementById("patient").value;
let drname = document.getElementById('dr').value;
localStorage.setItem(drname, patientname);
var aywa = localStorage.getItem(drname);

//should clear input value in both fields after user pressses submit (optional)

  console.log(aywa);
  console.log(localStorage);
}
