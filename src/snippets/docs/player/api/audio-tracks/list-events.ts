player.audioTracks.addEventListener('add', (event) => {
  const newTrack = event.detail; // `AudioTrack`
  // ...
});

player.audioTracks.addEventListener('change', (event) => {
  const { prev, current } = event.detail; // Audio Tracks
  // ...
});
