import { isHLSProvider } from 'vidstack';

const player = document.querySelector('media-player');

// This is where you should configure providers.
player.addEventListener('provider-change', (event) => {
  const provider = event.detail;
  if (isHLSProvider(provider)) {
    provider.config = {};
    provider.onInstance((hls) => {
      // ...
    });
  }
});

// Provider is rendered, attached event listeners, and ready to load source.
player.addEventListener('provider-setup', (event) => {
  const provider = event.detail;
  if (isHLSProvider(provider)) {
    // ...
  }
});
