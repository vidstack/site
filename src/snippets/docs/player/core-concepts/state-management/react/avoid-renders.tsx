import { useEffect, useRef } from 'react';

import { MediaPlayer, MediaProvider, type MediaPlayerInstance } from '@vidstack/react';

function Player() {
  const player = useRef<MediaPlayerInstance>(null);

  useEffect(() => {
    // Access snapshot of player state.
    const { paused } = player.current!.state;

    // Subscribe for updates without triggering renders.
    return player.current!.subscribe(({ currentTime }) => {
      // ...
    });
  }, []);

  return (
    <MediaPlayer ref={player}>
      <MediaProvider />
      {/* ... */}
    </MediaPlayer>
  );
}
