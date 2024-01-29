import {
  isGoogleCastProvider,
  MediaPlayer,
  type MediaProviderAdapter,
  type MediaProviderSetupEvent,
} from '@vidstack/react';

function onProviderSetup(provider: MediaProviderAdapter, nativeEvent: MediaProviderSetupEvent) {
  if (isGoogleCastProvider(provider)) {
    // Google Cast remote player.
    provider.player;
    // Google Cast context.
    provider.cast;
    // Google Cast session.
    provider.session;
    // Google Cast media info.
    provider.media;
    // Whether the session belongs to this provider.
    provider.hasActiveSession;
  }
}

<MediaPlayer onProviderSetup={onProviderSetup} />;
