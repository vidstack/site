import { MediaPlayer, type HLSManifestLoadedEvent } from '@vidstack/react';
import type { ManifestLoadedData } from 'hls.js';

function onManifestLoaded(data: ManifestLoadedData, nativeEvent: HLSManifestLoadedEvent) {
  // ...
}

<MediaPlayer onHlsManifestLoaded={onManifestLoaded} />;
