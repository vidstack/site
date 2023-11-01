import {
  MediaPlayer,
  type MediaOrientationChangeEvent,
  type ScreenOrientationChangeEventDetail,
  type ScreenOrientationLockType,
  type ScreenOrientationType,
} from '@vidstack/react';

function Player() {
  function onOrientationChange(
    { orientation, lock }: ScreenOrientationChangeEventDetail,
    nativeEvent: MediaOrientationChangeEvent,
  ) {
    // ...
  }

  return <MediaPlayer onOrientationChange={onOrientationChange}>{/* ... */}</MediaPlayer>;
}
