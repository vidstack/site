import {
  isHLSProvider,
  MediaPlayer,
  type MediaProviderAdapter,
  type MediaProviderSetupEvent,
} from '@vidstack/react';

function onProviderSetup(provider: MediaProviderAdapter, nativeEvent: MediaProviderSetupEvent) {
  if (isHLSProvider(provider)) {
    const element = provider.video; // `HTMLVideoElement`
  }
}

<MediaPlayer onProviderSetup={onProviderSetup} />;
