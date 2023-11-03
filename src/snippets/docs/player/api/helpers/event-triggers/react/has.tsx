import { hasTriggerEvent, MediaPlayer, type MediaPlayingEvent } from '@vidstack/react';

function onPlaying(nativeEvent: MediaPlayingEvent) {
  // Resuming from buffering?
  if (hasTriggerEvent(nativeEvent, 'waiting')) {
    // ...
  }
}

<MediaPlayer onPlaying={onPlaying} />;
