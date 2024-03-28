import { type MediaAudioGainChangeEvent } from 'vidstack';

player.addEventListener('audio-gain-change', (event) => {
  const requestEvent = event.request;
  const gain = event.detail;
});
