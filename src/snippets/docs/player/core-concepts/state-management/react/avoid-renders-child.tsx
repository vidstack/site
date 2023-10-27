import { useEffect } from 'react';

import { useMediaPlayer } from '@vidstack/react';

// This component is a child of `<MediaPlayer>`
function PlayerChildComponent() {
  const player = useMediaPlayer();

  useEffect(() => {
    if (!player) return;
    // Same as example above here.
  }, [player]);
}
