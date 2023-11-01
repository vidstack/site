import { type PointerEvent } from 'react';

import { useMediaRemote } from '@vidstack/react';

function FullscreenControl() {
  const remote = useMediaRemote();

  function onPointerUp({ nativeEvent }: PointerEvent) {
    // - We are providing the "trigger" here.
    // - Trigger events allow us to trace events back to their origin.
    // - The fullscreen change event will have this pointer event in its chain.
    remote.toggleFullscreen('prefer-media', nativeEvent);
  }

  return <button onPointerUp={onPointerUp}>{/* ... */}</button>;
}
