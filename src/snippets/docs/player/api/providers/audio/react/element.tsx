import {
  isAudioProvider,
  MediaPlayer,
  type MediaProviderAdapter,
  type MediaProviderSetupEvent,
} from '@vidstack/react';

function onProviderSetup(provider: MediaProviderAdapter, nativeEvent: MediaProviderSetupEvent) {
  if (isAudioProvider(provider)) {
    const element = provider.audio; // `HTMLAudioElement`
  }
}

<MediaPlayer onProviderSetup={onProviderSetup} />;
