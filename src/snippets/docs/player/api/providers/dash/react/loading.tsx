import {
  isDASHProvider,
  MediaPlayer,
  type MediaProviderAdapter,
  type MediaProviderChangeEvent,
} from '@vidstack/react';

function onProviderChange(
  provider: MediaProviderAdapter | null,
  nativeEvent: MediaProviderChangeEvent,
) {
  if (isDASHProvider(provider)) {
    // Default development URL.
    provider.library = 'https://cdn.jsdelivr.net/npm/dashjs@4.7.4/dist/dash.all.debug.js';
    // Default production URL.
    provider.library = 'https://cdn.jsdelivr.net/npm/dashjs@4.7.4/dist/dash.all.min.js';
  }
}

<MediaPlayer onProviderChange={onProviderChange} />;
