import { type MediaPIPChangeEvent, type MediaPIPErrorEvent } from 'vidstack';

player.addEventListener('picture-in-picture-change', (event) => {
  const requestEvent = event.request;
  const isActive = event.detail;
});

player.addEventListener('picture-in-picture-error', (event) => {
  const requestEvent = event.request;
  const error = event.detail;
});
