player.addEventListener('provider-setup', (event) => {
  const provider = event.detail;
  if (provider?.type === 'dash') {
    provider.ctor; // `dashjs` constructor
    provider.instance; // `dashjs` instance
  }
});
