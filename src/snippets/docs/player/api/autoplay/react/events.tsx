import {
  MediaPlayer,
  type MediaAutoplayEvent,
  type MediaAutoplayEventDetail,
  type MediaAutoplayFailEvent,
  type MediaAutoplayFailEventDetail,
} from '@vidstack/react';

function Player() {
  // autoplay has successfully started.
  function onAutoplay({ muted }: MediaAutoplayEventDetail, nativeEvent: MediaAutoplayEvent) {
    const requestEvent = nativeEvent.request;
  }

  // autoplay has failed.
  function onAutoplayFail(
    { muted, error }: MediaAutoplayFailEventDetail,
    nativeEvent: MediaAutoplayFailEvent,
  ) {
    const requestEvent = nativeEvent.request;
  }

  return (
    <MediaPlayer autoplay onAutoplay={onAutoplay} onAutoplayFail={onAutoplayFail}>
      {/* ... */}
    </MediaPlayer>
  );
}
