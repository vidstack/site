import { useRef } from 'react';

import { MediaPlayer, useMediaStore, type MediaPlayerInstance } from '@vidstack/react';

function Player() {
  const player = useRef<MediaPlayerInstance>(null);

  const {
    canAirPlay,
    canGoogleCast,
    remotePlaybackState,
    remotePlaybackType,
    isAirPlayConnected,
    isGoogleCastConnected,
  } = useMediaStore(player);

  return <MediaPlayer ref={player}>{/* ... */}</MediaPlayer>;
}
