import { type MediaLiveChangeEvent, type MediaLiveEdgeChangeEvent } from 'vidstack';

player.addEventListener('live-change', (event) => {
  const isLive = event.detail;
});

player.addEventListener('live-edge-change', (event) => {
  const atLiveEdge = event.detail;
});
