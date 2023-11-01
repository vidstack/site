// Get state.
const { audioTracks, audioTrack } = player.state;

// Subscribe to changes.
player.subscribe(({ audioTracks, audioTrack }) => {
  // ...
});
