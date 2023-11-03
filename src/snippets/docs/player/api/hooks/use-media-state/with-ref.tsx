import { useRef } from 'react';

import {
  MediaPlayer,
  MediaProvider,
  useMediaState,
  type MediaPlayerInstance,
} from '@vidstack/react';

function Player() {
  const player = useRef<MediaPlayerInstance>(null);

  const isPaused = useMediaState('paused', player);

  <MediaPlayer ref={player}>
    <MediaProvider />
    {/* ... */}
  </MediaPlayer>;
}
