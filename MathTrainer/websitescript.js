

function onSignIn(user) {
  var profile = user.getBasicProfile();
  $('#profile .name').text(profile.getName());
  $('#profile .email').text(profile.getEmail());
  console.log(profile.getImageUrl());
  $("#profile_image").attr('src', profile.getImageUrl());

}


function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function() {
    console.log('User signed out.');
  });
}


var publicSpreadsheetUrl =
  'https://docs.google.com/spreadsheets/d/1pT8kPHk8TU7C-kxeg5_laivKMD4Zs012-ukTR8tlGIY/gviz/tq?tqx=out:html&tq=select%20B,C,D,E,F%20where%20(C%20%3E=%202%20AND%20C%20%3C=%203)%20AND%20((B%20=%20%27AMC%208%27)%20OR%20(B%20=%20%27AMC%2010%27))%20AND%20D%20=%20%27Geometry%27%20limit%206';

function init() {
  Tabletop.init({
    key: publicSpreadsheetUrl,
    callback: showInfo,
    simpleSheet: true
  })
}

function showInfo(data, tabletop) {
  console.log(data);
  localStorage['problems'] = JSON.stringify(data);




}
function myFunction() {

  alert("hello");
}

window.addEventListener('DOMContentLoaded', init)

function enter() {
  var id = String(arguments[0]);
  var answer = String(arguments[1]);


  var z = String('input-' + id);
  alert(arguments[0]);

  var section = document.getElementById(id);
  var ans = document.getElementById(z);
  var correct = document.getElementById('correct-'+id);
  var incorrect = document.getElementById('incorrect-'+id);
  if ((ans == answer)) {
    correct.style = "";
    incorrect.style = "none";


}
else {
  correct.style = "none";
  incorrect.style = "inline";

}
}
function getData() {
  var solved = localStorage['solved]']
  if (solved) solved = Array.from(solved);
  else {
    localStorage['solved'] = [];
  }
  var stored = localStorage['problems'];
  if (stored) data = JSON.parse(stored);
  else data = {
    a: 'test',
    b: [1, 2, 3]
  };
  var user_difficulty = document.getElementById("level").value;

  var user_subjects = [];
  var div = document.getElementById('problems');
  var c = 0;
  var problem_number = document.getElementById('length').value;


var subjects = ["Geometry", "Algebra", "Number Theory", "Counting and Probability"];

var G =  document.getElementById("Geometry").checked;
var A =  document.getElementById("Algebra").checked;
var N =  document.getElementById("Number Theory").checked;
var C =  document.getElementById("Counting and Probability").checked;

  if (G){
    user_subjects.push("Geometry");

  }
  if (A){
    user_subjects.push("Algebra");


  }
  if (N){
    user_subjects.push("Number Theory");

  }
  if (C){
    user_subjects.push("Counting and Probability");
}

    console.log(user_subjects);


  div.innerHTML = "<ul></ul>";
  console.log(problem_number);
  for (i = 0; i < data.length; i++) {
    problem = data[i];
    if (Number(problem.Difficulty) <= Number(user_difficulty)) {
      if (Number(user_difficulty) <= Number(problem.Difficulty) + 1) {
        console.log(Number(problem.Difficulty), Number(user_difficulty), Number(problem.Difficulty) + 1);

        if (user_subjects.includes(problem.Subject)) {

            var answer = problem.Answer;
            var question = problem.Question;
            var id = String(problem.unique_ID);
            c += 1;
            if (c <= problem_number) {

              var x = 'correct-'+ id;
              var y = 'incorrect-' + id;
              var z = 'input-' + id;

div.insertAdjacentHTML('beforeend',"<div id=id> \
<div id = x class='alert alert-success' role='alert' style ='display: none;'>\
Your answer is correct! Congratulations! \
  <button type='button' class='close' data-dismiss='alert' aria-label='Close'>\
    <span aria-hidden='true'>&times;</span>\
  </button>\
</div>\
<div id = y class='alert alert-danger' role='alert' style ='display: none;'>\
Your answer is incorrect. Try again. \
  <button type='button' class='close' data-dismiss='alert' aria-label='Close'>\
    <span aria-hidden='true'>&times;</span>\
  </button>\
</div>\
 <h1>Problem " + c + "</h1>" + question + '<br></div>');
 var n = 10;
   div.insertAdjacentHTML('beforeend',' <div class="input-group mb-3"> \
   <script>\
   var n = 10;\
</script> \
   <input type="text" class="form-control" id = z > \
   <div class="input-group-append"> \
     <button class="btn btn-light" type="button" onclick ="enter(n,69);">Submit</button> \
   </div>\
 </div>');


            }

          }
        }

      }

    }
  }
