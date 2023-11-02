import { isHTMLAudioElement, MediaPlayer, type MediaLoadedMetadataEvent } from '@vidstack/react';

function onLoadedMetadata(nativeEvent: MediaLoadedMetadataEvent) {
  // Available on all media events!
  const target = nativeEvent.trigger?.target;
  if (isHTMLAudioElement(target)) {
    const element = target; // `HTMLAudioElement`
  }
}

<MediaPlayer onLoadedMetadata={onLoadedMetadata} />;
