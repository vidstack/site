import { useEffect, useState } from 'react';

import { MediaPlayer, MediaProvider, type MediaSrc } from '@vidstack/react';

function Player() {
  const [src, setSrc] = useState<MediaSrc>();

  useEffect(() => {
    async function getMediaStream() {
      // Example 1: Audio
      const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setSrc({ src: audioStream, type: 'audio/object' });

      // Example 2: Video
      const videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setSrc({ src: videoStream, type: 'video/object' });
    }

    getMediaStream();
  }, []);

  return (
    <MediaPlayer src={src}>
      <MediaProvider />
    </MediaPlayer>
  );
}
