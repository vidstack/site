player.addEventListener('provider-setup', (event) => {
  const provider = event.detail;
  if (provider?.type === 'video') {
    const element = provider.video; // `HTMLVideoElement`
  }
});
