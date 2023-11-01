import { MediaPlayer, type MediaPIPChangeEvent, type MediaPIPErrorEvent } from '@vidstack/react';

function Player() {
  function onPIPChange(isActive: boolean, nativeEvent: MediaPIPChangeEvent) {
    const requestEvent = nativeEvent.request;
  }

  function onPIPError(error: unknown, nativeEvent: MediaPIPErrorEvent) {
    const requestEvent = nativeEvent.request;
  }

  return (
    <MediaPlayer onPictureInPictureChange={onPIPChange} onPictureInPictureError={onPIPError}>
      {/* ... */}
    </MediaPlayer>
  );
}
