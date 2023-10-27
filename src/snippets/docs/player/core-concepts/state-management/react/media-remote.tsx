import { type PointerEvent } from 'react';

import { useMediaRemote } from '@vidstack/react';

function PlayerChildComponent() {
  const remote = useMediaRemote();

  function onClick({ nativeEvent }: PointerEvent) {
    // Attaching trigger here to trace this play call back to this event.
    remote.play(nativeEvent);
  }

  return <button onPointerUp={onClick}>{/* ... */}</button>;
}
