import { isGoogleCastProvider, type GoogleCastProvider } from '@vidstack/react';

player.addEventListener('provider-change', (event) => {
  const provider = event.detail;
  if (isGoogleCastProvider(provider)) {
    // ...
  }
});

player.addEventListener('provider-setup', (event) => {
  const provider = event.detail;
  if (isGoogleCastProvider(provider)) {
    // ...
  }
});
