// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBgqCbV0F72t5zgbeKsaA52hXvcTU_DGKQ",
    authDomain: "scanner-201222.firebaseapp.com",
    databaseURL: "https://scanner-201222.firebaseio.com",
    projectId: "scanner-201222",
    storageBucket: "scanner-201222.appspot.com",
    messagingSenderId: "100113184033"
  };
  firebase.initializeApp(config);

var database = firebase.database();


function writeUserData() {
  var userId = localStorage["userId"];
  var today_date = new Date();
  var receipt_date = document.getElementById("date").value;
  var amount = document.getElementById("amount").value;
  var place = document.getElementById("place").value;
  var name = document.getElementById("name").value;

  firebase.database().ref('users/' + userId).push({
    receipt_date: receipt_date,
    today_date: today_date,
    amount: amount,
    name: name,
    place: place,
    });
}

function arrayToCSV(objArray) {
     const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
     let str = `${Object.keys(array[0]).map(value => `"${value}"`).join(",")}` + '\r\n';

     return array.reduce((str, next) => {
         str += `${Object.values(next).map(value => `"${value}"`).join(",")}` + '\r\n';
         return str;
        }, str);
 }
array1 = [];

function getUserData(){
  var userId = localStorage["userId"];
  var email = localStorage["email"];

  var name = document.getElementById("name").value;
  var place = document.getElementById("place").value;
  var start = document.getElementById("start").value;
  var end = document.getElementById("end").value;
  var min = document.getElementById("min").value;
  var max = document.getElementById("max").value;

  var users = firebase.database().ref("users/" + userId);
  users.on("value",function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();

      var amount = childData.amount;
      var usr_name = childData.name;
      var date = childData.receipt_date;
      var usr_place = childData.place;
      if (usr_name == name || name.length === 0) {
        if (min <= amount && amount <= max || min.length === 0 || max.length === 0) {

          if (usr_place == place || place.length === 0) {
            array1.push(childData);
      }}}
  });

  });

if (array1.length == 0) {
    array1 = [""].splice(0);

}


string = arrayToCSV(JSON.stringify(array1.splice(0)));

string = String(string).replace(/"/g, '');

//var fileContents = string.getFileContents;

//  console.log(string.replace(/"/g,""));
  //email_string = "".concat("mailto:",email,"?subject=scanner.io receipts-",date,"&body=",fileContents);

//alert(string);
string = encodeURI(string);

link = "data:application/octet-stream,"+string;
encoded = string;
stuff = "Test";
return[link];
}

window.onload = getUserData();
window.onload = getUserData();

function download() {
  document.getElementById("download").href = String(getUserData());
  document.getElementById("download").style = "";

}
