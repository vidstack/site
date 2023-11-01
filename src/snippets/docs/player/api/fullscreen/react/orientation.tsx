import { MediaPlayer, MediaProvider } from '@vidstack/react';

function Player() {
  return (
    // Landscape is the default.
    <MediaPlayer fullscreenOrientation="landscape">
      <MediaProvider />
      {/* ... */}
    </MediaPlayer>
  );
}
