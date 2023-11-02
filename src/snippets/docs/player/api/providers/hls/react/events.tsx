import {
  MediaPlayer,
  type HLSManifestLoadedEvent,
  type HLSMediaAttachedEvent,
} from '@vidstack/react';
import type { ManifestLoadedData, MediaAttachedData } from 'hls.js';

// See player events API reference for all events.

function onMediaAttached(data: MediaAttachedData, nativeEvent: HLSMediaAttachedEvent) {
  // ...
}

function onManifestLoaded(data: ManifestLoadedData, nativeEvent: HLSManifestLoadedEvent) {
  // ...
}

<MediaPlayer onHlsMediaAttached={onMediaAttached} onHlsManifestLoaded={onManifestLoaded} />;
