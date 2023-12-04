import {
  isAudioProvider,
  isHLSProvider,
  isVideoProvider,
  isVimeoProvider,
  isYouTubeProvider,
  type AudioProvider,
  type HLSProvider,
  type MediaProvider,
  type VideoProvider,
  type VimeoProvider,
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

  if (isVimeoProvider(provider)) {
    provider.cookies = true;
    // ...
  }
});
