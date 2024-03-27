import {
  isDASHProvider,
  type MediaProviderAdapter,
  type MediaProviderChangeEvent,
} from '@vidstack/react';

function onProviderChange(
  provider: MediaProviderAdapter | null,
  nativeEvent: MediaProviderChangeEvent,
) {
  if (isDASHProvider(provider)) {
    provider.config = {
      // ...
    };
  }
}

<MediaPlayer onProviderChange={onProviderChange} />;
