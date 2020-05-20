var CLIENT_ID = '944440220598-0vncc1lc0g3u630bokcp06cjv3hqguqe.apps.googleusercontent.com';
var API_KEY = 'AIzaSyDJqMSWGLHn9tOWkcuf-CKvell6oxUCrdM';

var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];


var SCOPES = "https://www.googleapis.com/auth/spreadsheets";

var authorizeButton = document.getElementById('authorize_button');
var signoutButton = document.getElementById('signout_button');


var i = 1;
var setLimit = 5;


var convert = 'ACDEFGHIJKLMNOPQRSTUVWXYZ'

var n = 0;
form = document.getElementById("formcontainer");


var hmmttest = {


    "problems": {

        "set1": {
            "1": {
                "Number": "1",
                "Question": "\\(12+23+34+\\cdots+78+89+91\\).",
                "Difficulty": "4",
                "Answer": "1314"
            },
            "2": {
                "Number": "2",
                "Question": "Find the smallest positive integer with four times as many even as odd divisors.",
                "Difficulty": "4",
                "Answer": "16"

            },

            "3": {
                "Number": "3",
                "Question": "Isosceles triangle \\(ABC\\) with \\(AB=AC\\) is inscribed in a circle with radius \\(2\\) such that the angle between the tangent lines to \\(A\\) and \\(B\\) is \\(60^{\\circ}\\). The area of \\(ABC\\) can be written in the form \\(m\\sqrt{n}\\) where \\(m\\) and \\(n\\) are positive integers and \\(n\\) is not divisible by the square of any prime. Find \\(m+n\\).",
                "Difficulty": "4",
                "Answer": "6"

            },
            "4": {
                "Number": "4",
                "Question": "How many integer pairs \\((x,y)\\) satisfy \\(x^y=16\\)?",
                "Difficulty": "4",
                "Answer": "5"

            }
        },

        "set2": {
            "5": {
                "Number": "5",
                "Question": "Farmer John has some roosters and eggs. First, each rooster lays two eggs. He now has \\(21\\) eggs. Next, each egg lays three roosters. If he now has \\(21\\) eggs and \\(69\\) roosters, how many total roosters and eggs did he originally have?",
                "Difficulty": "6",
                "Answer": "15"
            },
            "6": {
                "Number": "6",
                "Question": "Timmy is the \\(74\\)th person in line, and there are five people between him and and the person in the middle of the line. How many people are in the line?",
                "Difficulty": "6",
                "Answer": "136"
            },
            "7": {
                "Number": "7",
                "Question": "Given that \\((r+s)\\cdot t = 99\\) for prime numbers \\(r,s,t\\), find the sum of all possible values of \\((r+s)+t\\).",
                "Difficulty": "6",
                "Answer": "56"
            }
        }


    }

};



function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}


function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(function () {
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
    }, function (error) {
        appendPre(JSON.stringify(error, null, 2));
    });
}


function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        authorizeButton.style.display = 'none';
        signoutButton.style.display = 'block';
        getData()
    } else {
        authorizeButton.style.display = 'block';
        signoutButton.style.display = 'none';
    }
}

function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}

function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}


function getData() {

    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1uQDLTCxOdZqfdfo08PzVnwrYzq2k2swC1t9sUpkFoDo',
        range: 'Sheet1!A1:A',
    }).then((response) => {
        var result = response.result;
        n = result["values"][0] + 2;
    });

}



function submitCode() {
    getData()
    teamname = document.getElementById("teamname").value;
    members = document.getElementById("members").value;
    code = document.getElementById("gamecode").value;


    var values = [
        [
            teamname, members
        ],
    ];
    var body = {
        values: values
    };
    range = "A" + (n + 3).toString() + ":B" + (n + 3).toString();
    console.log(range)
    gapi.client.sheets.spreadsheets.values.update({
        spreadsheetId: "1sKeixciRhUcDIExsQyljEqzLq__dRI6-9HKrcJ4ne64",
        range: range,
        valueInputOption: "RAW",
        resource: body
    }).then((response) => {
        var result = response.result;
    });

    form.innerHTML = "";
    addQuestions();
}

var q = 1;

function addQuestions() {
    form.innerHTML = "";
    console.log("set" + (i))
    console.log(hmmttest["problems"]["set2"])
    //console.log(Object.keys(hmmttest["problems"]["set" + i + 1]).length)
    for (var j = q; j < q + Object.keys(hmmttest["problems"]["set" + i]).length; j++) {
        console.log(j)
        form.innerHTML += '<div id="formcontainer"><div class="form-group">';
        form.innerHTML += '<label for="teamname"><h4>Question ' + (j) + '</h4></label>';
        form.innerHTML += '<p>' + hmmttest["problems"]["set" + i][j]["Question"] + '</p>';
        form.innerHTML += '<input type="text" class="form-control" id="question' + (j) + '" value = testans' + j + ' placeholder="The answer is an integer from 0 to 999">';
        form.innerHTML += '<br></div>';
    }
    form.innerHTML += '<button type = "button" onclick="submit(' + i + ');" class="btn btn-primary">Submit Round ' + i + '</button></div>';
    form.innerHTML += '<br><br><div class="alert alert-warning" role="alert">Remember you cannot go back once you submit this round!</div>';
    MathJax.typeset()
}



function submit(n) {
    submitAns = [];


    for (var j = q; j < q + Object.keys(hmmttest["problems"]["set" + n]).length; j++) {
        submitAns.push((document.getElementById("question" + (j)).value));
    }

    console.log(submitAns)
    q += Object.keys(hmmttest["problems"]["set" + i]).length

    var values = [
        submitAns,
    ];

    var body = {
        values: values
    };

    range = convert[i].toString() + (n + 3).toString()
    gapi.client.sheets.spreadsheets.values.update({
        spreadsheetId: "1uQDLTCxOdZqfdfo08PzVnwrYzq2k2swC1t9sUpkFoDo",
        range: range,
        valueInputOption: "RAW",
        resource: body
    }).then((response) => {
        var result = response.result;
    });

    i++;

    if (i < setLimit + 1) {
        addQuestions();
    } else {
        form.innerHTML = '<p>The game is over. Await further command.</p>';

    }
}