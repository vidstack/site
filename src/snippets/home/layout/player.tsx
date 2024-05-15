import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

<MediaPlayer title="..." src="stream.m3u8">
  <MediaProvider>
    <Poster src="poster.webp" alt="..." />

    {tracks.map((track) => (
      <Track {...track} key={track.src} />
    ))}
  </MediaProvider>

  <DefaultVideoLayout thumbnails="thumbnails.vtt" icons={defaultLayoutIcons} />
</MediaPlayer>;
