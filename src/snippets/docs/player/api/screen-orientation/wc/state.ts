const player = document.querySelector('media-player');

// Get state.
const { orientation, canOrientScreen } = player.state;

// Subscribe to changes.
player.subscribe(({ orientation, canOrientScreen }) => {
  if (orientation === 'landscape') {
    // ...
  }
});
