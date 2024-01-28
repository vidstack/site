import { useEffect, useRef } from 'react';

import { MediaPlayer, type MediaPlayerInstance } from '@vidstack/react';

function Player() {
  const player = useRef<MediaPlayerInstance>(null);

  useEffect(() => {
    // Call whenever you like - also available on `useMediaRemote`.
    player.current!.startLoading();

    // Call when poster should start loading.
    player.current!.startLoadingPoster();
  }, []);

  return (
    <MediaPlayer load="custom" posterLoad="custom" ref={player}>
      {/* ... */}
    </MediaPlayer>
  );
}
