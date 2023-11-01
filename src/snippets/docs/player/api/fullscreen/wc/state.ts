const player = document.querySelector('media-player');

// Get state.
const { canFullscreen, fullscreen } = player.state;

// Subscribe to changes.
player.subscribe(({ canFullscreen, fullscreen }) => {
  // ...
});
