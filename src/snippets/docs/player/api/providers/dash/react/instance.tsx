import {
  isDASHProvider,
  type MediaProviderAdapter,
  type MediaProviderSetupEvent,
} from '@vidstack/react';

function onProviderSetup(provider: MediaProviderAdapter, nativeEvent: MediaProviderSetupEvent) {
  if (isDASHProvider(provider)) {
    provider.ctor; // `dashjs` constructor
    provider.instance; // `dashjs` instance
  }
}

<MediaPlayer onProviderSetup={onProviderSetup} />;
