import {
  isAudioProvider,
  isHLSProvider,
  isVideoProvider,
  isYouTubeProvider,
  type AudioProvider,
  type HLSProvider,
  type MediaProvider,
  type VideoProvider,
  type YouTubeProvider,
} from 'vidstack';

player.addEventListener('provider-change', (event) => {
  const provider = event.detail;

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
});
