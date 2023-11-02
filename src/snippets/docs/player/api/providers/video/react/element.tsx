import {
  isVideoProvider,
  MediaPlayer,
  MediaProvider,
  type MediaProviderAdapter,
  type MediaProviderSetupEvent,
} from '@vidstack/react';

function Player() {
  function onProviderSetup(provider: MediaProviderAdapter, nativeEvent: MediaProviderSetupEvent) {
    if (isVideoProvider(provider)) {
      const element = provider.video; // `HTMLVideoElement`
    }
  }

  return (
    <MediaPlayer onProviderSetup={onProviderSetup}>
      <MediaProvider />
      {/* ... */}
    </MediaPlayer>
  );
}
