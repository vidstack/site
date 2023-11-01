// Get state.
const { qualities, quality, autoQuality, canSetQuality } = player.state;

// Subscribe to changes.
player.subscribe(({ qualities, quality, autoQuality, canSetQuality }) => {
  // ...
});
