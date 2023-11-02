import { isHTMLVideoElement, MediaPlayer, type MediaLoadedMetadataEvent } from '@vidstack/react';

function onLoadedMetadata(nativeEvent: MediaLoadedMetadataEvent) {
  // Available on all media events!
  const target = nativeEvent.trigger?.target;
  if (isHTMLVideoElement(target)) {
    const element = target; // `HTMLVideoElement`
  }
}

<MediaPlayer onLoadedMetadata={onLoadedMetadata} />;
