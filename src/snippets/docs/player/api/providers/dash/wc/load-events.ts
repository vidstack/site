// Fired when we begin downloading the dashjs library.
player.addEventListener('dash-lib-load-start', (event) => {
  //  ...
});

// Fired when the dashjs library has loaded.
player.addEventListener('dash-lib-loaded', (event) => {
  const dashCtor = event.detail; // `DASHConstructor`
});

// Fired when the dashjs library fails to download.
player.addEventListener('dash-lib-load-error', (event) => {
  const error = event.detail; // `Error`
});
