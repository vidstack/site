import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

import React from 'react';

import { MediaPlayer, MediaProvider, Poster, Track } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

function YourPlayer() {
  return (
    <MediaPlayer title="..." src="/stream.m3u8" aspectRatio="16/9">
      <MediaProvider>
        <Poster src="/poster.webp" alt="..." />
        <Track src="/chapters.vtt" lang="en-US" kind="chapters" default />
      </MediaProvider>
      <DefaultVideoLayout
        icons={defaultLayoutIcons}
        thumbnails="/thumbnails.vtt"
        style={{
          '--video-brand': '#f5f5f5',
        }}
      />
    </MediaPlayer>
  );
}
