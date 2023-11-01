import { type MediaAutoplayEvent, type MediaAutoplayFailEvent } from 'vidstack';

const player = document.querySelector('media-player');

// autoplay has successfully started.
player.addEventListener('autoplay', (event: MediaAutoplayEvent) => {
  const requestEvent = event.request;
});

// autoplay has failed.
player.addEventListener('autoplay-fail', (event: MediaAutoplayFailEvent) => {
  const requestEvent = event.request;
  console.log(event.detail.muted); // was media muted?
  console.log(event.detail.error); // media error
});
