const post = document.getElementById("post");
var user = "Jet Chung";

function bold() {
    post.value += "[b][/b]";
}

function underline() {
    post.value += "[u][/u]";
}

function italic() {
    post.value += "[i][/i]";
}


function color(c) {
    post.value += "[color=" + c + "][/color]";

}

function hide() {
    post.value += "[hide][/hide]";

}

function url() {
    post.value += "[url][/url]";

}

function img() {
    post.value += "[img][/img]";

}



function submitPost() {
    var date = new Date()
    date = date.getTime()
    const dateTimeFormat = new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    })
    const [{
        value: month
    }, , {
        value: day
    }, , {
        value: year
    }] = dateTimeFormat.formatToParts(date)

    date = `${month} ${day}, ${year }`;
    var subject = document.getElementById("subject").value;
    var content = document.getElementById("post").value;

    if (subject.length < 8 || subject.length > 50) {
        document.getElementById("subject-error").style = "";
    } else {

        document.getElementById("subject-error").style = "display:none;";

    }

    if (content.length < 8 || content.length > 10000) {
        document.getElementById("post-error").style = "";
    } else {

        document.getElementById("post-error").style = "display:none;";

    }
    if (subject !== "" && content !== "") {
        addPost(user, subject, date);
    }

}


function addPost(author,date, postText, title, subject) {
   

    var posts = document.getElementById("posts");


}


document.getElementById("subject").addEventListener("input", function () {
    var subject = document.getElementById("subject").value;
    if (subject.length >= 8 && subject.length <= 50) {
        document.getElementById("subject-error").style = "display:none;";
    }
});



document.getElementById("post").addEventListener("input", function () {
    var preview = document.getElementById("preview");
    var post1 = document.getElementById("post");
    var temp = post1.value

    temp = temp.replace("[b]", "<b>");
    temp = temp.replace("[/b]", "</b>")

    temp = temp.replace("[i]", "<i>");
    temp = temp.replace("[/i]", "</i>")

    temp = temp.replace("[u]", "<u>");
    temp = temp.replace("[/u]", "</u>")

    var temp1 = temp.slice(temp.indexOf("[color=#"), )
    var color1 = temp1.slice(8, temp1.indexOf("]"))

    temp = temp.replace("[color=#" + color1 + "]", "<p style = 'color:#" + color1 + ";'>")
    temp = temp.replace("[/color]", "</p>")


    temp1 = temp.slice(temp.indexOf("[url]"), )
    var url1 =  "https://" + temp1.substring(5, temp1.length - 6)

    temp = temp.replace("[url]", "<a href='" + url1 + "'>")
    temp = temp.replace("[/url]", "</a>")


    preview.innerHTML = temp;

    var content = document.getElementById("post").value;
    if (content.length >= 8 && content.length <= 10000) {
        document.getElementById("post-error").style = "display:none;";
    }


});