import {
  isHLSProvider,
  MediaPlayer,
  MediaProvider,
  type MediaProviderAdapter,
} from '@vidstack/react';

function Player() {
  // This is where you should configure providers.
  function onProviderChange(provider: MediaProviderAdapter | null) {
    if (isHLSProvider(provider)) {
      provider.config = {};
      provider.onInstance((hls) => {
        // ...
      });
    }
  }

  // Provider is rendered, attached event listeners, and ready to load source.
  function onProviderSetup(provider: MediaProviderAdapter) {
    if (isHLSProvider(provider)) {
      // ...
    }
  }

  return (
    <MediaPlayer onProviderChange={onProviderChange} onProviderSetup={onProviderSetup}>
      <MediaProvider />
    </MediaPlayer>
  );
}
