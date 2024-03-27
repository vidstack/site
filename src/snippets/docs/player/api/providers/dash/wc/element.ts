player.addEventListener('provider-setup', (event) => {
  const provider = event.detail;
  if (provider?.type === 'dash') {
    const element = provider.video; // `HTMLVideoElement`
  }
});
