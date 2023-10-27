import { useState } from 'react';

import { MediaPlayer } from '@vidstack/react';

function Player() {
  const [paused, setPaused] = useState(true);

  return (
    <MediaPlayer onPlay={() => setPaused(false)} onPause={() => setPaused(true)}>
      {/* ... */}
    </MediaPlayer>
  );
}
