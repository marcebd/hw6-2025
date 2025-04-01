var video;
video = document.querySelector("#player1");

// Page load
// Initialize the video element and turn off autoplay and turn off looping.
video.autoplay = false;
video.loop = false;
video.load();

// Play Button
// Play the video and update the volume information.  
document.getElementById("play").addEventListener("click", function() {
	video.play();
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";
	console.log("Play Video");
});
// Pause Button
// Pause the video.
document.getElementById("pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});
// Slow Down Button
// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  
document.getElementById("slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New speed is " + video.playbackRate);
});

//Speed Up
// Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
document.getElementById("faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New speed is " + video.playbackRate);
});

// Skip Ahead
// Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
document.getElementById("skip").addEventListener("click", function() {
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Current location is " + video.currentTime);
});

//Mute
// Mute/unmute the video and update the text in the button.
document.getElementById("mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
		console.log("Unmuted");
	} else {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
		console.log("Muted");
	}
});

// Volume Slider
// Change the volume based on the slider and update the volume information.
const volume = document.getElementById("volume");
const sliderValue = document.getElementById("slider");
sliderValue.addEventListener("input", (event) => {
	volume.textContent = event.target.value;
	video.volume = event.target.value / 100;
	console.log("Volume is " + video.volume);
});

// Styled
// Utilize the existing oldSchool class on the video element
document.getElementById("vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Old School");

});
// Original
// Remove the oldSchool class from the video.
document.getElementById("orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Original");
});




window.addEventListener("load", function() {
	console.log("Good job opening the window")

});





