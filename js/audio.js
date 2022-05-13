const Audio = document.getElementById('audio');
const playBtn = document.getElementById('audio-play');
const pauseBtn = document.getElementById('audio-pause');

// Play audio & mostra pause btn
playBtn.addEventListener('click', function() {
  Audio.play(); 
  playBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
});

// Pause audio & mostra play btn

pauseBtn.addEventListener('click', function() {
    Audio.pause();
    playBtn.style.display = "inline-block";
    pauseBtn.style.display = "none";
});
