import {
  isAudioProvider,
  MediaPlayer,
  MediaProvider,
  type MediaProviderAdapter,
  type MediaProviderSetupEvent,
} from '@vidstack/react';

function Player() {
  function onProviderSetup(provider: MediaProviderAdapter, nativeEvent: MediaProviderSetupEvent) {
    if (isAudioProvider(provider)) {
      const element = provider.audio; // `HTMLAudioElement`
    }
  }

  return (
    <MediaPlayer onProviderSetup={onProviderSetup}>
      <MediaProvider />
      {/* ... */}
    </MediaPlayer>
  );
}
