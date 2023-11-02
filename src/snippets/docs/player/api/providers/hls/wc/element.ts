player.addEventListener('provider-setup', (event) => {
  const provider = event.detail;
  if (provider?.type === 'hls') {
    const element = provider.video; // `HTMLVideoElement`
  }
});
