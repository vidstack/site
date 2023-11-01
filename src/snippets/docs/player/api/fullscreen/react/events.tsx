import {
  MediaPlayer,
  type MediaFullscreenChangeEvent,
  type MediaFullscreenErrorEvent,
} from '@vidstack/react';

function Player() {
  function onFullscreenChange(isFullscreen: boolean, nativeEvent: MediaFullscreenChangeEvent) {
    const requestEvent = nativeEvent.request;
  }

  function onFullscreenError(error: unknown, nativeEvent: MediaFullscreenErrorEvent) {
    const requestEvent = nativeEvent.request;
  }

  return (
    <MediaPlayer onFullscreenChange={onFullscreenChange} onFullscreenError={onFullscreenError}>
      {/* ... */}
    </MediaPlayer>
  );
}
