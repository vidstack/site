import { useRef } from 'react';

import {
  MediaPlayer,
  MediaProvider,
  useMediaStore,
  type MediaPlayerInstance,
} from '@vidstack/react';

function Player() {
  const player = useRef<MediaPlayerInstance>(null);

  const { paused, playing /* ... */ } = useMediaStore(player);

  <MediaPlayer ref={player}>
    <MediaProvider />
    {/* ... */}
  </MediaPlayer>;
}
