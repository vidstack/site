// Get state.
const {
  canAirPlay,
  canGoogleCast,
  remotePlaybackState,
  remotePlaybackType,
  isAirPlayConnected,
  isGoogleCastConnected,
} = player.state;

// Subscribe to changes.
player.subscribe(({ canAirPlay, canGoogleCast /* ... */ }) => {
  // ...
});
