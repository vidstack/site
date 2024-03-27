import { VidstackPlayer, VidstackPlayerLayout } from 'vidstack/global/player';

const player = await VidstackPlayer.create('#target', {
  title: '{TITLE}',
  src: '{SRC}',
  poster: '{POSTER}',
  layout: new VidstackPlayerLayout({
    thumbnails: '{THUMBNAILS}',
  }),
});
