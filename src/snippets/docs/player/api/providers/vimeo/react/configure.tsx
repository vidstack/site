import {
  isVimeoProvider,
  MediaPlayer,
  MediaProvider,
  type MediaProviderAdapter,
} from '@vidstack/react';

function Player() {
  function onProviderChange(provider: MediaProviderAdapter | null) {
    if (isVimeoProvider(provider)) {
      provider.cookies = true;
      // Following applies to native controls.
      provider.title = false;
      provider.byline = false;
    }
  }

  return (
    <MediaPlayer onProviderChange={onProviderChange}>
      <MediaProvider />
      {/* ... */}
    </MediaPlayer>
  );
}
