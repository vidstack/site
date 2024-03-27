import { MediaPlayer, type DASHManifestLoadedEvent } from '@vidstack/react';
import type { ManifestLoadedEvent } from 'dashjs';

// See player events API reference for all events.

function onManifestLoaded(data: ManifestLoadedEvent, nativeEvent: DASHManifestLoadedEvent) {
  // ...
}

<MediaPlayer onDashManifestLoaded={onManifestLoaded} />;
