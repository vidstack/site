player.textTracks.addEventListener('add', (event) => {
  const newTrack = event.detail; // `TextTrack`
  // ...
});

player.textTracks.addEventListener('mode-change', (event) => {
  const track = event.detail; // `TextTrack`
  // ...
});
