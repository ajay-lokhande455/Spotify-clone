let isPlaying = false;

const playPauseBtn = document.getElementById('playPauseBtn');

playPauseBtn.addEventListener('click', function() {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

function playSong() {
    isPlaying = true;
    playPauseBtn.innerHTML = '&#10074;&#10074;'; // Pause icon
    // Logic to play the song
}

function pauseSong() {
    isPlaying = false;
    playPauseBtn.innerHTML = '&#9654;'; // Play icon
    // Logic to pause the song
}
