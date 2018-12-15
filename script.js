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


//pushes user inputs to localStorage
function submitfunc(){
let patientname = document.getElementById("patient").value;
let drname = document.getElementById('dr').value;
localStorage.setItem(drname, patientname);

//should clear input value in both fields after user pressses submit (optional)

  alert(localStorage);
}
