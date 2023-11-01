import { useRef } from 'react';

import { MediaPlayer, useMediaStore, type MediaPlayerInstance } from '@vidstack/react';

function Player() {
  const player = useRef<MediaPlayerInstance>(null);

  const { live, liveEdge, liveEdgeWindow } = useMediaStore(player);

  return <MediaPlayer ref={player}>{/* ... */}</MediaPlayer>;
}
