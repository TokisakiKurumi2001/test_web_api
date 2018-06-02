// Prefer camera resolution nearest to 1280x720.
var constraints = { audio: false, 
					video: {
						width: {ideal: 1280},
						height : {ideal : 720},
						facingMode : {
							exact : "environment"
						}   
					}
				};

navigator.mediaDevices.getUserMedia(constraints)
.then(function(mediaStream) {
  var video = document.querySelector('video');
  video.srcObject = mediaStream;
  video.onloadedmetadata = function(e) {
    video.play();
  };
})
.catch(function(err) { document.write(err.name + ": " + err.message); }); // always check for errors at the end.
