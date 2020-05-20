post = document.getElementById("post");

function bold() {
    post.value += "[b][/b]"
}

function underline() {
    post.value += "[u][/u]"
}

function italic() {
    post.value += "[i][/i]"
}


function color(c) {
    post.value += "[color=" + c + "][/color]"
}

function hide(){
    post.value += "[hide][/hide]"

}

function url(){
    post.value += "[url][/url]"

}

function img(){
    post.value += "[img][/img]"

}