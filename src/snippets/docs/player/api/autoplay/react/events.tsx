import {
  MediaPlayer,
  type MediaAutoPlayEvent,
  type MediaAutoPlayEventDetail,
  type MediaAutoPlayFailEvent,
  type MediaAutoPlayFailEventDetail,
} from '@vidstack/react';

function Player() {
  // autoplay has successfully started.
  function onAutoPlay({ muted }: MediaAutoPlayEventDetail, nativeEvent: MediaAutoPlayEvent) {
    const requestEvent = nativeEvent.request;
  }

  // autoplay has failed.
  function onAutoPlayFail(
    { muted, error }: MediaAutoPlayFailEventDetail,
    nativeEvent: MediaAutoPlayFailEvent,
  ) {
    const requestEvent = nativeEvent.request;
  }

  return (
    <MediaPlayer autoplay onAutoPlay={onAutoPlay} onAutoPlayFail={onAutoPlayFail}>
      {/* ... */}
    </MediaPlayer>
  );
}
