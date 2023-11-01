// Get state.
const { textTracks, textTrack } = player.state;

// Subscribe to changes.
player.subscribe(({ textTracks, textTrack }) => {
  // ...
});
