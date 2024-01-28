import { type MediaAutoPlayEvent, type MediaAutoPlayFailEvent } from 'vidstack';

// autoplay has successfully started.
player.addEventListener('auto-play', (event: MediaAutoPlayEvent) => {
  const requestEvent = event.request;
});

// autoplay has failed.
player.addEventListener('auto-play-fail', (event: MediaAutoPlayFailEvent) => {
  const requestEvent = event.request;
  console.log(event.detail.muted); // was media muted?
  console.log(event.detail.error); // media error
});
