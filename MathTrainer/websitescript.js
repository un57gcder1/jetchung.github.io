function submit() {

  alert("hello");
}

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

window.addEventListener('DOMContentLoaded', init)


function getData() {

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


            var question = problem.Question;
            c += 1;
            if (c <= problem_number) {


              div.insertAdjacentHTML('beforeend', "<h1>Problem " + c + "</h1>" + question + '<br><input type="text" id="input"></input> <button class="btn btn-default" type="button" onclick=submit();>Submit</button>');


            }

          }
        }

      }

    }
    timer()
  }


  function timer() {
    var countDownDate = (document.getElementById("time").value);

    var distance = "hello";

    console.log(countDownDate);

    // Set the date we're counting down to
    var timeParts = countDownDate.split(":");

    var hours = timeParts[0]
    var minutes = timeParts[1]
    var total_minutes = minutes + 60*hours;
    console.log(total_minutes);
    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();


        // Find the distance between now an the count down date


        var total_minutes = minutes + 60*hours;

        var hours = Math.floor(minutes/60);
        var minutes = total_minutes-60*hours;
        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = hours + "h "
        + minutes + "m ";

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);

  }
