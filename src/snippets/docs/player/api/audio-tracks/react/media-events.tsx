import {
  MediaPlayer,
  type AudioTrack,
  type MediaAudioTrackChangeEvent,
  type MediaAudioTracksChangeEvent,
} from '@vidstack/react';

function Player() {
  function onAudioTracksChange(tracks: AudioTrack[], event: MediaAudioTracksChangeEvent) {
    // ...
  }

  function onAudioTrackChange(track: AudioTrack | null, event: MediaAudioTrackChangeEvent) {
    // ...
  }

  return (
    <MediaPlayer onAudioTracksChange={onAudioTracksChange} onAudioTrackChange={onAudioTrackChange}>
      {/* ... */}
    </MediaPlayer>
  );
}
