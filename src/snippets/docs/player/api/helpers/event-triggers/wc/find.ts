import { findTriggerEvent, isPointerEvent } from 'vidstack';

player.addEventListener('play', (event) => {
  const pointerEvent = findTriggerEvent(event, 'pointerup');
  if (isPointerEvent(pointerEvent)) {
    // ...
  }
});
