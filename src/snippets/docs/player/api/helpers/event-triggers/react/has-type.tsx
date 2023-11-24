import { MediaPlayer, type MediaPlayingEvent } from '@vidstack/react';

function onPlaying(nativeEvent: MediaPlayingEvent) {
  // Resuming from buffering?
  if (nativeEvent.triggers.hasType('waiting')) {
    // ...
  }
}

<MediaPlayer onPlaying={onPlaying} />;
