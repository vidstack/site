// Get state.
const { canSetAudioGain, audioGain } = player.state;

// Subscribe to changes.
player.subscribe(({ canSetAudioGain, audioGain }) => {
  // ...
});
