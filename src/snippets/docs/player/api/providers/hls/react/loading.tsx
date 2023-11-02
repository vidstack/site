import {
  isHLSProvider,
  MediaPlayer,
  type MediaProviderAdapter,
  type MediaProviderChangeEvent,
} from '@vidstack/react';

function onProviderChange(
  provider: MediaProviderAdapter | null,
  nativeEvent: MediaProviderChangeEvent,
) {
  if (isHLSProvider(provider)) {
    // Default development URL.
    provider.library = 'https://cdn.jsdelivr.net/npm/hls.js@^1.0.0/dist/hls.js';
    // Default production URL.
    provider.library = 'https://cdn.jsdelivr.net/npm/hls.js@^1.0.0/dist/hls.min.js';
  }
}

<MediaPlayer onProviderChange={onProviderChange} />;
