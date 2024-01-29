import {
  MediaPlayer,
  type MediaRemotePlaybackChangeEvent,
  type MediaRemotePlaybackChangeEventDetail,
} from '@vidstack/react';

function Player() {
  function onRemotePlaybackChange(
    { type, state }: MediaRemotePlaybackChangeEventDetail,
    nativeEvent: MediaRemotePlaybackChangeEvent,
  ) {
    // type: airplay or google-cast
    // state: connected, connecting, disconnected
  }

  return <MediaPlayer onRemotePlaybackChange={onRemotePlaybackChange}>{/* ... */}</MediaPlayer>;
}
