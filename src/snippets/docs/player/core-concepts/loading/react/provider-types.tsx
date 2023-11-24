import {
  isAudioProvider,
  isHLSProvider,
  isVideoProvider,
  isYouTubeProvider,
  MediaPlayer,
  MediaProvider,
  type AudioProvider,
  type HLSProvider,
  type MediaProviderAdapter,
  type VideoProvider,
  type YouTubeProvider,
} from '@vidstack/react';

function Player() {
  function onProviderChange(provider: MediaProviderAdapter | null) {
    if (isAudioProvider(provider)) {
      const audioElement = provider.audio;
    }

    if (isVideoProvider(provider)) {
      const videoElement = provider.video;
    }

    if (isHLSProvider(provider)) {
      provider.config = { lowLatencyMode: true };
      provider.onInstance((hls) => {
        // ...
      });
    }

    if (isYouTubeProvider(provider)) {
      provider.cookies = true;
      // ...
    }
  }

  return (
    <MediaPlayer onProviderChange={onProviderChange}>
      <MediaProvider />
      {/* ... */}
    </MediaPlayer>
  );
}
