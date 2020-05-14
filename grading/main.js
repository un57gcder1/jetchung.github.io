var classes = {
    "m1": "Math Competitions I",
    "m2": "Math Competitions II",
    "pm": "Physics: Mechanics",
    "li": "Linguistics",
    "as": "Astronomy",
    "bi": "Biology"
}
var weeks = {
    "w1": "Week 1",
    "w2": "Week 2",
    "w3": "Week 3",
    "w4": "Week 4",
    "w5": "Week 5",
}
var days = {
    "d1": "Week 1",
    "d2": "Week 2",
    "d3": "Week 3",
    "d4": "Week 4",
    "d5": "Week 5",
}
var lookup = {
    "35149m1w1d3": "blah"

}

function addAssignment() {
    var items = document.getElementById("gradingtodo");
    var id = "35149m1w2d3"
    items.innerHTML += "<ol><button onclick = displayData('" + id + "')>" + getDatafromID(id) + "</button></ol>";

}


function getDatafromID(id) {

    return "Student " + id.slice(0, 5) + " " + classes[id.slice(5, 7)] + " " + weeks[id.slice(7, 9)] + " " + days[id.slice(9, 11)]

}


function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

function displayData(id) {
    document.getElementById("student").innerText = "Student: " + id.slice(0, 5)
    document.getElementById("assignment").innerText = "Assignment: " + classes[id.slice(5, 7)] + " " + weeks[id.slice(7, 9)] + " " + days[id.slice(9, 11)]
    console.log(getDatafromID("35149m1w2d3"))

}