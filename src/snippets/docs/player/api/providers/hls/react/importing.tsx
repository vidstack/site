import {
  isHLSProvider,
  MediaPlayer,
  type MediaProviderAdapter,
  type MediaProviderChangeEvent,
} from '@vidstack/react';
import HLS from 'hls.js';

function onProviderChange(
  provider: MediaProviderAdapter | null,
  nativeEvent: MediaProviderChangeEvent,
) {
  if (isHLSProvider(provider)) {
    // Static import
    provider.library = HLS;
    // Or, dynamic import
    provider.library = () => import('hls.js');
  }
}

<MediaPlayer onProviderChange={onProviderChange} />;
