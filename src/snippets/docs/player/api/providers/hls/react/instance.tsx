import {
  isHLSProvider,
  type MediaProviderAdapter,
  type MediaProviderSetupEvent,
} from '@vidstack/react';

function onProviderSetup(provider: MediaProviderAdapter, nativeEvent: MediaProviderSetupEvent) {
  if (isHLSProvider(provider)) {
    provider.ctor; // `hls.js` constructor
    provider.instance; // `hls.js` instance
  }
}

<MediaPlayer onProviderSetup={onProviderSetup} />;
