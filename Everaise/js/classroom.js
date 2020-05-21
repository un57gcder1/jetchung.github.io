var canvas = document.getElementById('layer2');
var board = document.getElementById('layer1');
var boardfade = document.getElementById('layer3');

let isDrawing = false;
let x = 0;
let y = 0;
var penColor = "black";
var penWidth = 2;



var eraser = document.getElementById("eraser");
var marker = document.getElementById("marker");
var line = document.getElementById("line");
var square = document.getElementById("square");
var circle = document.getElementById("circle");
var trash = document.getElementById("trash");

function deactivate(item) {
    item.className = "btn btn-outline-dark";
}

function activate(item) {
    item.className = "btn btn-outline-dark active"
}


var tool = "pen";

function swaparoo() {
    if (eraser.className == "btn btn-outline-dark active") {
        deactivate(eraser);
        activate(marker);
        deactivate(line);
        deactivate(square);
        deactivate(circle);
    }
}

function funceraser() {
    penColor = "aliceblue";
    penWidth = 30;
    activate(eraser);
    deactivate(marker);
    deactivate(line);
    deactivate(square);
    deactivate(circle);
    deactivate(trash);


}

function funcmarker() {
    penColor = "black";
    penWidth = 2;
    deactivate(eraser);
    activate(marker);
    deactivate(line);
    deactivate(square);
    deactivate(circle);
    deactivate(trash);
}

function funcline() {
    deactivate(eraser);
    deactivate(marker);
    activate(line);
    deactivate(square);
    deactivate(circle);
    deactivate(trash);

}

function funcsquare() {
    deactivate(eraser);
    deactivate(marker);
    deactivate(line);
    activate(square);
    deactivate(circle);
    deactivate(trash);

}

function funccircle() {
    deactivate(eraser);
    deactivate(marker);
    deactivate(line);
    deactivate(square);
    activate(circle);
    deactivate(trash);

}

function functrash() {
    ctx.clearRect(0, 0, board.width, board.height);

    deactivate(eraser);
    deactivate(marker);
    deactivate(line);
    deactivate(square);
    deactivate(circle);
    activate(trash);

}

function color(c) {
    penColor = c;
}

function chatsubmit() {
    var chatlist = document.getElementById("chatlist");
    $(chatlist).prepend('<li ><b>Anonymous: </b>' + document.getElementById("chatbox").value + "</li>");
    MathJax.typeset();


}

$("#chatbox").on('keyup', function (e) {
    if (e.keyCode === 13) {
        chatsubmit();
    }
});
var chat = document.getElementById("chats");

canvas.style.left = chat.offsetWidth - 180;
board.width = chat.offsetWidth;

$('#pensize').on('change', function () {
    penWidth = $(this).val();
})

board.addEventListener('mousedown', e => {
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
});

board.addEventListener('mousemove', e => {
    if (isDrawing === true) {
        drawLine(ctx, x, y, e.offsetX, e.offsetY);

        x = e.offsetX;
        y = e.offsetY;
    }
});

window.addEventListener('mouseup', e => {
    if (isDrawing === true) {
        drawLine(ctx, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        isDrawing = false;

    }
});

function drawLine(ctx, x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.strokeStyle = penColor;
    ctx.lineWidth = penWidth;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();


}



var ctx = board.getContext('2d');

var video = document.getElementById('video');

video.addEventListener('play', function () {
    var $this = this;
    (function loop() {
        if (!$this.paused && !$this.ended) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext('2d').drawImage($this, 0, 0, canvas.width, canvas.height);
            setTimeout(loop, 1000 / 30);
            canvas.style.left = chat.offsetWidth - 180;
        }
    })();
}, 0);

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({
            audio: false,
            video: true,

        })
        .then(function (stream) {
            video.srcObject = stream;
        })
        .catch(function (err0r) {
            console.log("Something went wrong!");
        });
}