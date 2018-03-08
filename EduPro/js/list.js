function update() {
var number = 0;
var todo = 0;
    var itemlist = document.getElementById("myUL").getElementsByTagName("li");
    var list_length = itemlist.length

    var current = 0;
    for (i = 0; i < list_length; i++) {


        var current = itemlist[i];
        if (current.style.display != "none") {
        number += 1;
        }

        if (current.className != "checked" && current.style.display != "none") {
        todo += 1;

        }



        }

        var list = document.getElementById("myUL").getElementsByTagName("li");

var save = document.getElementById("myUL").innerHTML;
setCookie(save,"newtolist");
var value = document.getElementById("progress-thing");
var str = item2string(list);
if (number == 0){
        value = 0;
    }
    else {
        value = (number-todo)/number;
    }    document.getElementById("progress-thing").style.width = (value*100).toFixed(0) + "%";
    document.getElementById("percent").innerHTML = (value*100).toFixed(0) + "%";
    }


// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");

var i;



for (i = 0; i < close.length; i++) {
      var temp = close.className;
      document.getElementById("myUL").removeChild(li);


  close[i].onclick = function() {

    var div = this.parentElement;
    div.style.display = "none";



  }

}




// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');

list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');

update();

  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
      update();



  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
        update();


  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      div.class = "deleted";
      update();

    }
  }
}








//lolololol




function setCookie(cookie,cname) {
    var d = new Date();
    d.setTime(d.getTime() + (7*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cookie + ";" + expires + ";path=/";

}



function item2string(list) {
    dict = [];
    for(i = 0; i < list.length; i++) {
        var thing1 = list[i];
        dict.push({"name":thing1.innerText ,"checked":thing1.className});
    }
    string = JSON.stringify(dict);
    return string;
    }



function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
var delete_cookie = function(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};
//console.debug(readCookie("newtodolist"));
//console.debug(data(item2string("todolist")));
items = readCookie("newtolist");
delete_cookie("newtolist");

document.getElementById("myUL").innerHTML = items;
update();

