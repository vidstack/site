let paused = true;

player.addEventListener('pause', () => {
  paused = true;
});

player.addEventListener('play', () => {
  paused = false;
});
