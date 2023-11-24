import { MediaPlayer, type MediaPauseEvent } from '@vidstack/react';

function onPause(nativeEvent: MediaPauseEvent) {
  // Device sleep would be tracked elsewhere.
  if (isDeviceSleep) {
    nativeEvent.triggers.add(new Event('device-sleep'));
    nativeEvent.originEvent; // this will now return device-sleep
  }
}

<MediaPlayer onPause={onPause} />;
