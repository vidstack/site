const player = document.querySelector('media-player');

// Get snapshot of internal media state.
const {
  paused,
  playing,
  waiting,
  currentTime,
  // ...
} = player.state;
