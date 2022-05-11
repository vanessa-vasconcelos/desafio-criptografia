

var Audio = document.getElementById('#audio');

var playBtn = document.getElementById('audio-play');

var pauseBtn = document.getElementById('audio-pause');

{/* Play audio & mostra pause btn */}


playBtn.addEventListener('click', function() {
  Audio.play(); 
  playBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
})


// Pause audio & mostra play btn
var pauseShow = function() {
  podcastAudio.pause();
  playBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
};
