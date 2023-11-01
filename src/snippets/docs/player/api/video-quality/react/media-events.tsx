import {
  MediaPlayer,
  type MediaQualitiesChangeEvent,
  type MediaQualityChangeEvent,
  type VideoQuality,
} from '@vidstack/react';

function Player() {
  function onQualitiesChange(quality: VideoQuality[], nativeEvent: MediaQualitiesChangeEvent) {
    // ...
  }

  function onQualityChange(quality: VideoQuality | null, nativeEvent: MediaQualityChangeEvent) {
    //  ...
  }

  return (
    <MediaPlayer onQualitiesChange={onQualitiesChange} onQualityChange={onQualityChange}>
      {/* ... */}
    </MediaPlayer>
  );
}
