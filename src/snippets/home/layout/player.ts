import 'vidstack/player/styles/default/theme.css';
import 'vidstack/player/styles/default/layouts/video.css';

import { VidstackPlayer, VidstackPlayerLayout } from 'vidstack/player';

const player = await VidstackPlayer.create({
  target: '#target',
  title: 'Title',
  src: 'stream.m3u8',
  poster: 'poster.webp',
  layout: new VidstackPlayerLayout({
    thumbnails: 'thumbnails.vtt',
  }),
});
