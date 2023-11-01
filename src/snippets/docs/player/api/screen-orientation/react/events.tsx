import {
  MediaPlayer,
  type MediaOrientationChangeEvent,
  type ScreenOrientationChangeEventDetail,
} from '@vidstack/react';

function Player() {
  function onOrientationChange(
    { orientation, lock }: ScreenOrientationChangeEventDetail,
    nativeEvent: MediaOrientationChangeEvent,
  ) {
    const requestEvent = nativeEvent.request;
    // ...
  }

  return <MediaPlayer onOrientationChange={onOrientationChange}>{/* ... */}</MediaPlayer>;
}
