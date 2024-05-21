player.addEventListener('hls-manifest-loaded', (event) => {
  const levelLoadedData = event.detail; // `HLS.ManifestLoadedData`
  // ...
});
