player.addEventListener('provider-change', (event) => {
  const provider = event.detail;
  if (provider?.type === 'dash') {
    // Default development URL.
    provider.library = 'https://cdn.jsdelivr.net/npm/dashjs@4.7.4/dist/dash.all.debug.js';
    // Default production URL.
    provider.library = 'https://cdn.jsdelivr.net/npm/dashjs@4.7.4/dist/dash.all.min.js';
  }
});
