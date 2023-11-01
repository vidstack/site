import { type MediaOrientationChangeEvent } from 'vidstack';

player.addEventListener('orientation-change', (event: MediaOrientationChangeEvent) => {
  const requestEvent = nativeEvent.request;
  const { orientation, lock } = event.detail;
});
