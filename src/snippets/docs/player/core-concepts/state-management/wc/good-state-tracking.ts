const player = document.querySelector('media-player');

// Any media state accessed will create a dependency.
// The given callback will re-run as `paused` or `playing` state changes.
const unsubscribe = player.subscribe(({ paused, playing }) => {
  console.log('Paused:', paused);
  console.log('Playing:', playing);
  return () => {
    // Cleanup here if needed.
  };
});

unsubscribe();
