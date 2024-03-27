import {
  isAudioProvider,
  isDASHProvider,
  isGoogleCastProvider,
  isHLSProvider,
  isVideoProvider,
  isVimeoProvider,
  isYouTubeProvider,
  MediaPlayer,
  MediaProvider,
  type AudioProvider,
  type DASHProvider,
  type GoogleCastProvider,
  type HLSProvider,
  type MediaProviderAdapter,
  type VideoProvider,
  type VimeoProvider,
  type YouTubeProvider,
} from '@vidstack/react';
import { isRemotionProvider, type RemotionProvider } from '@vidstack/react/player/remotion';

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

    if (isDASHProvider(provider)) {
      provider.config = {};
      provider.onInstance((dash) => {
        // ...
      });
    }

    if (isYouTubeProvider(provider)) {
      provider.cookies = true;
      // ...
    }

    if (isVimeoProvider(provider)) {
      provider.cookies = true;
      // ...
    }

    if (isRemotionProvider(provider)) {
      // ...
    }

    if (isGoogleCastProvider(provider)) {
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
