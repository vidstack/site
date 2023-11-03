import { appendTriggerEvent, MediaPlayer, type MediaPauseEvent } from '@vidstack/react';

function onPause(nativeEvent: MediaPauseEvent) {
  // Device sleep would be tracked elsewhere.
  if (isDeviceSleep) {
    appendTriggerEvent(nativeEvent, new Event('device-sleep'));
  }
}

<MediaPlayer onPause={onPause} />;
