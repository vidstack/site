import {
  type MediaRemotePlaybackChangeEvent,
  type MediaRemotePlaybackChangeEventDetail,
} from 'vidstack';

player.addEventListener('remote-playback-change', (event) => {
  // type: airplay or google-cast
  // state: connected, connecting, disconnected
  const { type, state } = event.detail;
});
