// Fired when we begin downloading the hls.js library.
player.addEventListener('hls-lib-load-start', (event) => {
  //  ...
});

// Fired when the hls.js library has loaded.
player.addEventListener('hls-lib-loaded', (event) => {
  const hlsCtor = event.detail; // `HLSConstructor`
});

// Fired when the hls.js library fails to download.
player.addEventListener('hls-lib-load-error', (event) => {
  const error = event.detail; // `Error`
});
