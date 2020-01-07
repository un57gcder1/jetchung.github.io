//get user data and parse


var user_Difficulty = 3;
var ok_problems = {};
var usable_problems = {}
var solved = [];
var user_Subject = ["Geometry","Algebra"];
var user_Source = ["AMC 10"];
var sheet = SpreadsheetApp.getActiveSheet();
var data = sheet.getDataRange().getValues();
Logger.clear()
function findProblems() {
for (i = 1; i < data.length; i++) {

    var Difficulty = data[i][2];
    var source = data[i][1];
    var subject = data[i][3]
    var answer = data[i][5]
    var question = data[i][4]
    if (user_Difficulty <= Difficulty <= Difficulty + 3);
        if (user_Subject.indexOf("Geometry")>=0);
            if (user_Source.indexOf(source) >= 0);
                  if (solved.indexOf(problem) >= 0);
            ok_problems[question] = answer;
            problems.sort( function() { return 0.5 - Math.random() } );
  }
}



findProblems()

Logger.log(problems)


//send back  to site as inner user
