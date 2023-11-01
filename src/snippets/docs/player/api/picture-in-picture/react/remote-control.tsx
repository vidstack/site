import { type PointerEvent } from 'react';

import { useMediaRemote } from '@vidstack/react';

function PIPControl() {
  const remote = useMediaRemote();

  function onPointerUp({ nativeEvent }: PointerEvent) {
    // - We are providing the "trigger" here.
    // - Trigger events allow us to trace events back to their origin.
    // - The pip change/error event will have this pointer event in its chain.
    remote.togglePictureInPicture(nativeEvent);

    // Individual methods:
    remote.enterPictureInPicture(nativeEvent);
    remote.exitPictureInPicture(nativeEvent);
  }

  return <button onPointerUp={onPointerUp}>{/* ... */}</button>;
}
