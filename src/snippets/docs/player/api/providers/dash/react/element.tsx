import {
  isDASHProvider,
  MediaPlayer,
  type MediaProviderAdapter,
  type MediaProviderSetupEvent,
} from '@vidstack/react';

function onProviderSetup(provider: MediaProviderAdapter, nativeEvent: MediaProviderSetupEvent) {
  if (isDASHProvider(provider)) {
    const element = provider.video; // `HTMLVideoElement`
  }
}

<MediaPlayer onProviderSetup={onProviderSetup} />;
