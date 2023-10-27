import { MediaPlayer, MediaProvider, type MediaLoadedMetadataEvent } from '@vidstack/react';

function Player() {
  function onLoadedMetadata(nativeEvent: MediaLoadedMetadataEvent) {
    // original media event (`loadedmetadata`) is still available.
    const originalMediaEvent = nativeEvent.trigger;
  }

  return (
    <MediaPlayer onLoadedMetadata={onLoadedMetadata}>
      <MediaProvider />
      {/* ... */}
    </MediaPlayer>
  );
}
