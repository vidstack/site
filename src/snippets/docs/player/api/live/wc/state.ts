const player = document.querySelector('media-player');

// Get state.
const { live, liveEdge, liveEdgeWindow } = player.state;

// Subscribe to changes.
player.subscribe(({ live, liveEdge, liveEdgeWindow }) => {
  // ...
});
