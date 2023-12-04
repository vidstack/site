import {
  isYouTubeProvider,
  MediaPlayer,
  MediaProvider,
  type MediaProviderAdapter,
} from '@vidstack/react';

function Player() {
  function onProviderChange(provider: MediaProviderAdapter | null) {
    if (isYouTubeProvider(provider)) {
      provider.cookies = true;
    }
  }

  return (
    <MediaPlayer onProviderChange={onProviderChange}>
      <MediaProvider />
      {/* ... */}
    </MediaPlayer>
  );
}
