var canvas = document.getElementById('layer2');
var board = document.getElementById('layer1');




var ctx = canvas.getContext('2d');

var video = document.getElementById('video');

video.addEventListener('play', function () {
    var $this = this; //cache
    (function loop() {
        if (!$this.paused && !$this.ended) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext('2d').drawImage($this, 0, 0, canvas.width, canvas.height);
            setTimeout(loop, 1000 / 30); // drawing at 30fps
        }
    })();
}, 0);

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({
            audio: false,
            video:true,
            
        })
        .then(function (stream) {
            video.srcObject = stream;
        })
        .catch(function (err0r) {
            console.log("Something went wrong!");
        });
}