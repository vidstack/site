import {
  isGoogleCastProvider,
  MediaPlayer,
  MediaProvider,
  type GoogleCastProvider,
  type MediaProviderAdapter,
} from '@vidstack/react';

function onProviderChange(provider: MediaProviderAdapter | null) {
  if (isGoogleCastProvider(provider)) {
    // ...
  }
}

function onProviderSetup(provider: MediaProviderAdapter) {
  if (isGoogleCastProvider(provider)) {
    // ...
  }
}

<MediaPlayer onProviderChange={onProviderChange} onProviderSetup={onProviderSetup}>

