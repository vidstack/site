const player = document.querySelector('media-player');

// This is queued and called when media is ready.
player.paused = false;

// This is attempted immediately - will fail if media not ready.
player.play();
