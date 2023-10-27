import { MediaPlayer, MediaProvider, type MediaPlayingEvent } from '@vidstack/react';

function Player() {
  function onPlaying(nativeEvent: MediaPlayingEvent) {
    // the event that triggered the media play request
    const origin = nativeEvent.originEvent; // e.g., PointerEvent

    // was this triggered by an actual person?
    const userPlayed = nativeEvent.isOriginTrusted;

    // equivalent to above
    const isTrusted = nativeEvent.originEvent?.isTrusted;
  }

  return (
    <MediaPlayer onPlaying={onPlaying}>
      <MediaProvider />
      {/* ... */}
    </MediaPlayer>
  );
}
