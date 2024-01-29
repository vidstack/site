import { type MediaFullscreenChangeEvent, type MediaFullscreenErrorEvent } from 'vidstack';

player.addEventListener('fullscreen-change', (event) => {
  const requestEvent = event.request;
  const isFullscreen = event.detail;
});

player.addEventListener('fullscreen-error', (event) => {
  const requestEvent = event.request;
  const error = event.detail;
});
