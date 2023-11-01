player.qualities.addEventListener('add', (event) => {
  const newVideoQuality = event.detail; // `VideoQuality`
  // ...
});

player.qualities.addEventListener('change', (event) => {
  const { prev, current } = event.detail;
  // ...
});
