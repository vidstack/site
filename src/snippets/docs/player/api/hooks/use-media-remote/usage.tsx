import { useMediaRemote } from '@vidstack/react';

const remote = useMediaRemote();

function onPointerUp(event: PointerEvent) {
  // Attaching trigger here to trace this play call back to this event.
  remote.play(event);
}
