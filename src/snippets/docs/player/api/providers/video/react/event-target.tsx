import { isHTMLVideoElement, MediaPlayer, type MediaLoadedMetadataEvent } from '@vidstack/react';

function Player() {
  function onLoadedMetadata(nativeEvent: MediaLoadedMetadataEvent) {
    // Available on all media events!
    const target = nativeEvent.trigger?.target;
    if (isHTMLVideoElement(target)) {
      const element = target; // `HTMLVideoElement`
    }
  }

  return (
    <MediaPlayer onLoadedMetadata={onLoadedMetadata}>
      <MediaProvider />
      {/* ... */}
    </MediaPlayer>
  );
}
