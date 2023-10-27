import {
  MediaPlayer,
  MediaProvider,
  type MediaPlayEvent,
  type MediaPlayFailEvent,
  type MediaPlayRequestEvent,
} from '@vidstack/react';

function Player() {
  // 1. request was made
  function onPlayRequest(nativeEvent: MediaPlayRequestEvent) {
    // ...
  }

  // 2. request succeeded
  function onPlay(nativeEvent: MediaPlayEvent) {
    // request events are attached to media events
    const playRequestEvent = nativeEvent.request; // MediaPlayRequestEvent
  }

  // 2. request failed
  function onPlayFail(error: Error, nativeEvent: MediaPlayFailEvent) {
    // ...
  }

  return (
    <MediaPlayer onPlay={onPlay} onPlayFail={onPlayFail} onMediaPlayRequest={onPlayRequest}>
      <MediaProvider />
      {/* ... */}
    </MediaPlayer>
  );
}
