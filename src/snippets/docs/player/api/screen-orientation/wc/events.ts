import { type MediaOrientationChangeEvent } from 'vidstack';

const player = document.querySelector('media-player');

player.addEventListener('orientation-change', (event: MediaOrientationChangeEvent) => {
  const requestEvent = nativeEvent.request;
  const { orientation, lock } = event.detail;
});
