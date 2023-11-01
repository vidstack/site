import {
  MediaPlayer,
  type MediaTextTrackChangeEvent,
  type MediaTextTracksChangeEvent,
  type TextTrack,
} from '@vidstack/react';

function Player() {
  function onTextTracksChange(tracks: TextTrack[], nativeEvent: MediaTextTracksChangeEvent) {
    // ...
  }

  function onTextTrackChange(track: TextTrack | null, nativeEvent: MediaTextTrackChangeEvent) {
    // ...
  }

  return (
    <MediaPlayer onTextTracksChange={onTextTracksChange} onTextTrackChange={onTextTrackChange}>
      {/* ... */}
    </MediaPlayer>
  );
}
