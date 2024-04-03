var audio = document.getElementById("audio");
var toggleButton = document.getElementById("toggleButton");

function togglePlayPause() {
    return audio.paused ? audio.play() : audio.pause();
}

toggleButton.addEventListener("click", function() {
    togglePlayPause();
});