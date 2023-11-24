import { isPointerEvent } from 'vidstack';

player.addEventListener('play', (event) => {
  const pointerEvent = event.triggers.findType('pointerup');
  if (isPointerEvent(pointerEvent)) {
    // ...
  }
});
