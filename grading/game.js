var CLIENT_ID = '360705322004-4788r0itcn0g7c580mkb2fbboussjfku.apps.googleusercontent.com';
var API_KEY = 'AIzaSyCiYwlcqtXYJvhzCCCvm_b1FscuUH9uJzg';

var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];


var SCOPES = "https://www.googleapis.com/auth/spreadsheets";

var authorizeButton = document.getElementById('authorize_button');
var signoutButton = document.getElementById('signout_button');


function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}


function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(function() {
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
    }, function(error) {
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
        spreadsheetId: '1sKeixciRhUcDIExsQyljEqzLq__dRI6-9HKrcJ4ne64',
        range: 'Sheet1!A3:B',
    }).then((response) => {
        var result = response.result;
        var numRows = result.values ? result.values.length : 0;
        n = numRows;

    });

}



function submitCode() {
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
var i = 1;
var qlimit = 5;
var convert = {
    1: "C",
    2: "D",
    3: "E",
    4: "F",
    5: "G"
}
var n = 0;
form = document.getElementById("formcontainer");

function addQuestions() {
    form.innerHTML = '<div id="formcontainer"><div class="form-group"><label for="teamname">Question ' + i + '</label><input type="text" class="form-control" id="question' + i + '" placeholder="The answer is 69"> <br></div><button type = "button" onclick="submit(' + i + ');" class="btn btn-primary">Next</button></div>';
}



function submit(i) {

    questionValue = document.getElementById("question" + i).value;

    var values = [
        [
            questionValue
        ],
    ];
    var body = {
        values: values
    };
    range = convert[i].toString() + (n + 3).toString()
    gapi.client.sheets.spreadsheets.values.update({
        spreadsheetId: "1sKeixciRhUcDIExsQyljEqzLq__dRI6-9HKrcJ4ne64",
        range: range,
        valueInputOption: "RAW",
        resource: body
    }).then((response) => {
        var result = response.result;
    });

    i++;

    if (i < qlimit + 1) {
        form.innerHTML = '<div class="form-group"><label for="teamname">Question ' + i + '</label><input type="text" class="form-control" id="question' + i + '" placeholder="The answer is 69"> <br></div><button type = "button" onclick="submit(' + i + ')" class="btn btn-primary">Next</button>';
    } else {
        form.innerHTML = '<p>The game is over. Await further command.</p>';

    }
}