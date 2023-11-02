import {
  isHLSProvider,
  type MediaProviderAdapter,
  type MediaProviderChangeEvent,
} from '@vidstack/react';

function onProviderChange(
  provider: MediaProviderAdapter | null,
  nativeEvent: MediaProviderChangeEvent,
) {
  if (isHLSProvider(provider)) {
    provider.config = {
      // ...
    };
  }
}

<MediaPlayer onProviderChange={onProviderChange} />;
