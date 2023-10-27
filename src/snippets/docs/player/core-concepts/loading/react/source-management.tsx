import { useState } from 'react';

import { MediaPlayer, type MediaSrc } from '@vidstack/react';

const sources = ['/video-a.mp4', '/video-b.mp4', './video-c.mp4'];

function Player() {
  const [src, setSrc] = useState(0);

  function prevVideo() {
    setSrc((n) => Math.max(0, n - 1));
  }

  function nextVideo() {
    setSrc((n) => Math.min(sources.length - 1, n + 1));
  }

  return (
    <MediaPlayer src={sources[src]}>
      {/* ... */}
      {/* Playlist controls */}
      <button onClick={prevVideo}>Previous Video</button>
      <button onClick={nextVideo}>Next Video</button>
    </MediaPlayer>
  );
}
