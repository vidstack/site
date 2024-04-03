import { VidstackPlayer } from 'vidstack/global/player';

const player = await VidstackPlayer.create({
  target: '#target',
  title: '{TITLE}',
  src: '{SRC}',
  poster: '{POSTER}',
});
