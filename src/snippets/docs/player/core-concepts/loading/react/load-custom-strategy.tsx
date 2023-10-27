import { useEffect, useRef } from 'react';

import { MediaPlayer, type MediaPlayerInstance } from '@vidstack/react';

function Player() {
  const player = useRef<MediaPlayerInstance>(null);

  useEffect(() => {
    // Call whenever you like - also available on `useMediaRemote`.
    player.current!.startLoading();
  }, []);

  return (
    <MediaPlayer load="custom" ref={player}>
      {/* ... */}
    </MediaPlayer>
  );
}
