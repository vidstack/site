import { isPointerEvent, MediaPlayer, type MediaPlayEvent } from '@vidstack/react';

function onPlay(nativeEvent: MediaPlayEvent) {
  const pointerEvent = nativeEvent.triggers.findType('pointerup');
  if (isPointerEvent(pointerEvent)) {
    // ...
  }
}

<MediaPlayer onPlay={onPlay} />;
