import {
  MediaPlayer,
  type MediaLiveChangeEvent,
  type MediaLiveEdgeChangeEvent,
} from '@vidstack/react';

function Player() {
  function onLiveChange(isLive: boolean, nativeEvent: MediaLiveChangeEvent) {
    // ...
  }

  function onLiveEdgeChange(atLiveEdge: boolean, nativeEvent: MediaLiveEdgeChangeEvent) {
    // ...
  }

  return (
    <MediaPlayer onLiveChange={onLiveChange} onLiveEdgeChange={onLiveEdgeChange}>
      {/* ... */}
    </MediaPlayer>
  );
}
