import {
  findTriggerEvent,
  isPointerEvent,
  MediaPlayer,
  type MediaPlayEvent,
} from '@vidstack/react';

function onPlay(nativeEvent: MediaPlayEvent) {
  const pointerEvent = findTriggerEvent(nativeEvent, 'pointerup');
  if (isPointerEvent(pointerEvent)) {
    // ...
  }
}

<MediaPlayer onPlay={onPlay} />;
