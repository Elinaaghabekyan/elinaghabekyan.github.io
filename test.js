let theAudio = document.getElementById("theAudio")

theAudio.addEventListener('timeupdate', function() {
	if(theAudio.currentTime > 2.0){
		theAudio.pause()
	}
})

document.body.ondblclick  = function(){
	theAudio.play();
}