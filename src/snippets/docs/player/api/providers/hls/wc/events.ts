// See player events API reference for all events.

player.addEventListener('hls-media-attached', (event) => {
  const levelLoadedData = event.detail; // `HLS.MediaAttachedData`
  // ...
});

player.addEventListener('hls-manifest-loaded', (event) => {
  const levelLoadedData = event.detail; // `HLS.ManifestLoadedData`
  // ...
});
