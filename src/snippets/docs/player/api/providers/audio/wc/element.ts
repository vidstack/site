player.addEventListener('provider-setup', (event) => {
  const provider = event.detail;
  if (provider?.type === 'audio') {
    const element = provider.audio; // `HTMLAudioElement`
  }
});
