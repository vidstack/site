import { useEffect, useRef } from 'react';

import {
  LibASSTextRenderer,
  MediaPlayer,
  MediaProvider,
  Track,
  type MediaPlayerInstance,
} from '@vidstack/react';

function Player() {
  const player = useRef<MediaPlayerInstance>(null);

  useEffect(() => {
    const renderer = new LibASSTextRenderer(() => import('jassub'), {
      workerUrl: '/jassub/jassub-worker.js',
      legacyWorkerUrl: '/jassub/jassub-worker-legacy.js',
    });

    player.current!.textRenderers.add(renderer);
  }, []);

  return (
    <MediaPlayer ref={player}>
      <MediaProvider>
        <Track
          src="/english.ass"
          kind="subtitles"
          type="ass"
          label="English"
          lang="en-US"
          default
        />
      </MediaProvider>
      {/* ... */}
    </MediaPlayer>
  );
}
