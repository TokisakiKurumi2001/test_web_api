(function() {
    var video, localMediaStream;

    window.URL = window.URL || window.webkitURL;
    navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia;

    video = document.querySelector('video');

    document.querySelector('button#capture').addEventListener('click', function () {
        navigator.getUserMedia({audio: true, video: true}, function(stream) {
            localMediaStream = stream;
            video.src = window.URL.createObjectURL(stream);
        }, function(e) {
            console.log(e);
        });
    });

    document.querySelector('button#stop').addEventListener('click', function(e) {
        video.pause();
        localMediaStream.stop();
    });
}());
