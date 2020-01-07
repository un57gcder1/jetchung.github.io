



function setCookie() {

    var optionTexts = [];
    $("ul li").each(function() { optionTexts.push($(this).text()) });
    var cookie = optionTexts.join();

    var d = new Date();
    d.setTime(d.getTime() + (7*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = "todolist" + "=" + cookie + ";" + expires + ";path=/";


}

function getCookie() {
    var name = "todolist" + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
   var cookie_list = cookie.split("|");
   var list = document.getElementsByClassName("myUL");
 //   for(var i = 2; i < cookie_length.length; i++) {
        // Create the list item:
        //var item = document.createElement('li');

        // Set its contents:
        //item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        //list.appendChild(item);
    }

//}






//when update

    //turn myUL into string
    //set cookie to string

//page load
    //get cookie myUL
    //convert to list of myUL
    //put in list




var list = document.getElementById("myUL").getElementsByTagName("li");
var string1 = item2string(list)
function item2string(list) {
    dict = [];
    for(i = 0; i < list.length; i++) {
        var object = list[i];
        dict.push({"name":object.innerHTML,"view":object.style.display,"checked":object.className});
    }
    string = JSON.stringify(dict);
    return string;
    }





function item2string(list) {
    dict = [];
    for(i = 0; i < list.length; i++) {
        var object = list[i];
        dict.push({"name":object.innerHTML,"view":object.style.display,"checked":object.className});
    }
    string = JSON.stringify(dict);
    return string;
    }


data(string1)

function data(string){ //intial processing to load everything
    parsed = JSON.parse(string);
    for (i = 0; i < parsed.length; i++) {
        if (parsed[i].view != "none"){
            number += 1;
            if (parsed[i].checked == "") {
                todo += 1;
            }
            else {
            todo += 0;
            }
        }
    }
    if (number == 0){
        value = 0;
    }
    else {
        value = (number-todo)/number;
    }

    var myUL = document.getElementById("MyUL");

    for (i = 0; i < parsed.length; i++) {
        var item = parsed[i];
        var name = parsed.name;
        var checked = parsed.checked;
        var view = parsed.view;
        $("#myUL ul").append('<li class= ${checked} style = "display:${view}"> ${name} <span class = "close">x</li>');

    }
        return value;

    }











