import { isYouTubeProvider } from 'vidstack';

player.addEventListener('provider-change', (event) => {
  const provider = event.detail;

  if (isYouTubeProvider(provider)) {
    provider.cookies = true;
  }
});
