window.onload = function() {
	var option = {
		audio: false,
		video: {
			width : 1280,
			height : 720,
			facingMode : "environment"
		}
	};

	// the code will run if the broswer support, otherwise, use the cacth exception
	// pass the set for camera with `option`
	navigator.mediaDevices.getUserMedia(option)
	.then(function(mediaStream) {
		// if the code run successfully, .then function execute
		// get the element video
		var video = document.querySelector('video');
		// pass in camera transmit to the video-element
		video.srcObject = mediaStream;
		// when it load completely, run the video
		video.onloadedmetadata = function(e) {
			video.play();
		};
	})
	.catch(function(err) {
		// if there is an error, document.write to page, we cannot see anything console.log if we run on mobile
		document.write(err.name + " : " + err.message);
	});
}
