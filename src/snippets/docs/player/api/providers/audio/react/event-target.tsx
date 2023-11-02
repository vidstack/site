import { isHTMLAudioElement, MediaPlayer, type MediaLoadedMetadataEvent } from '@vidstack/react';

function Player() {
  function onLoadedMetadata(nativeEvent: MediaLoadedMetadataEvent) {
    // Available on all media events!
    const target = nativeEvent.trigger?.target;
    if (isHTMLAudioElement(target)) {
      const element = target; // `HTMLAudioElement`
    }
  }

  return (
    <MediaPlayer onLoadedMetadata={onLoadedMetadata}>
      <MediaProvider />
      {/* ... */}
    </MediaPlayer>
  );
}
