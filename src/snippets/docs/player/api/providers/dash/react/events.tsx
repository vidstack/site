import { MediaPlayer, type DASHManifestLoadedEvent } from '@vidstack/react';
import type { ManifestLoadedEvent } from 'dashjs';

function onManifestLoaded(data: ManifestLoadedEvent, nativeEvent: DASHManifestLoadedEvent) {
  // ...
}

<MediaPlayer onDashManifestLoaded={onManifestLoaded} />;
