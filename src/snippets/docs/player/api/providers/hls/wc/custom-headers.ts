player.addEventListener('provider-change', (event) => {
  const provider = event.detail;
  if (provider?.type === 'hls') {
    provider.config = {
      xhrSetup(xhr) {
        xhr.setRequestHeader('Authorization', `Bearer ${token}`);
      },
    };
  }
});
