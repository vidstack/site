import {
  isDASHProvider,
  MediaPlayer,
  type MediaProviderAdapter,
  type MediaProviderChangeEvent,
} from '@vidstack/react';
import DASH from 'dashjs';

function onProviderChange(
  provider: MediaProviderAdapter | null,
  nativeEvent: MediaProviderChangeEvent,
) {
  if (isDASHProvider(provider)) {
    // Static import
    provider.library = DASH;
    // Or, dynamic import
    provider.library = () => import('dashjs');
  }
}

<MediaPlayer onProviderChange={onProviderChange} />;
