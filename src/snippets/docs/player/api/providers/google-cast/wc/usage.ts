player.addEventListener('provider-setup', (event) => {
  const provider = event.detail;
  if (provider?.type === 'google-cast') {
    // Google Cast remote player.
    provider.player;
    // Google Cast context.
    provider.cast;
    // Google Cast session.
    provider.session;
    // Google Cast media info.
    provider.media;
    // Whether the session belongs to this provider.
    provider.hasActiveSession;
  }
});
