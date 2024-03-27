// See player events API reference for all events.

player.addEventListener('dash-manifest-loaded', (event) => {
  const loadedEvent = event.detail; // `DASH.ManifestLoadedEvent`
  // ...
});
