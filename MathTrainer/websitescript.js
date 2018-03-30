function cache() {

  solved = localStorage['solved']
  if (solved) {
    solved_dic = solved.split(",");
}
  else {
    solved_dic = [];
  }


  stored = localStorage['problems'];
  if (stored) data = JSON.parse(stored);
  else data = {};
}


window.onload = cache();


function onSignIn(user) {
  console.log("Foobar");
  var profile = user.getBasicProfile();
  $('#profile .name').text(profile.getName());
  $('#profile .email').text(profile.getEmail());
  //console.log(profile.getImageUrl());
  $("#profile_image").attr('src', profile.getImageUrl());

}


function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function() {
  //  console.log('User signed out.');
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
//  console.log(data);
  localStorage['problems'] = JSON.stringify(data);











}

window.addEventListener('DOMContentLoaded', init)

function enter(id,answer) {



  var id = String(id.id);
  var answer = String(answer);

  var z = String('input-' + id);

  var section = document.getElementById(id);
  var ans = String(document.getElementById(z).value);


  var correct = document.getElementById('correct-'+id);
  var incorrect = document.getElementById('incorrect-'+id);

  if (answer == ans) {
    correct.style = "";
    incorrect.style = "display: none";
    solved_dic.push(id);
    localStorage['solved'] = solved_dic;


}
else {
  correct.style = "display: none";
  incorrect.style = "";

}
}



function getData() {

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

  //  console.log(user_subjects);


  div.innerHTML = "<ul></ul>";
  //console.log(problem_number);
  for (i = 0; i < data.length; i++) {
    problem = data[i];
    if (Number(problem.Difficulty) <= Number(user_difficulty)) {
      if (Number(user_difficulty) <= Number(problem.Difficulty) + 1) {
      //  console.log(Number(problem.Difficulty), Number(user_difficulty), Number(problem.Difficulty) + 1);

        if (user_subjects.includes(problem.Subject)) {

            var answer = problem.Answer;
            var question = problem.Question;
            var id = problem.unique_ID;
            if (solved_dic.indexOf(id) < 0) {
              c += 1;

            if (c <= problem_number) {
              var x = 'correct-'+ id;
              var y = 'incorrect-' + id;
              var z = 'input-' + id;
              var source = problem.Source;
div.insertAdjacentHTML('beforeend',`<div id="${id}"> \
<div id = "${x}" class="alert alert-success" role="alert" style ="display: none;">\
Your answer is correct! Congratulations! \
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">\
    <span aria-hidden="true">&times;</span>\
  </button>\
</div>\
<div id = "${y}" class="alert alert-danger" role="alert" style ="display: none;"">\
Your answer is incorrect. We'll show you this problem again a little later. \
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">\
    <span aria-hidden="true">&times;</span>\
  </button>\
</div>\
 <h1>Problem ${c}</h1><h3>${source}</h3>${question}<br></div>`);
   div.insertAdjacentHTML('beforeend',`<div class="input-group mb-3"> \

   <input type="text" class="form-control" id = "${z}" > \
   <div class="input-group-append"> \
     <button class="btn btn-light" type="button" onclick ="enter(${id},\'${answer}\');">Submit</button> \
   </div>\
 </div>`);



            }
}
          }
        }

      }

    }
    if (c == 0);
    alert("Error: We don't have enough problems on this topic difficulty");
  }
